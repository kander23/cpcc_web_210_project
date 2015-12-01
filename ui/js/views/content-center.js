/**
 * Created by kevin on 10/25/2015.
 */

/**
 * Created by kevin on 10/25/2015.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'loglevel',
    'views/article',
    'views/search-results',
    'collections/articles',
    'text!templates/content-center.html',
    'scrollto'],

    function($, _, Backbone, log, ArticleView, SearchResultsView, ArticlesCollection, CtrTemplate){

        var ContentCenter = Backbone.View.extend({

            el : '#content-center',

            collections: {},

            // View constructor
            initialize: function() {

                this.children = {};
                this.children.articles = [];


            },

            // View Event Handlers
            events: {

            },

            /**
             *
             * @param page_id name of page route
             * @returns {ContentCenter}
             */
            render: function(page_obj) {
                var context = this;
                log.info('content render '+JSON.stringify(page_obj));

                if (_.isObject(page_obj) && _.has(page_obj, 'page') && _.isString(page_obj.page)) {
                    var page_id = page_obj.page;

                    // Setting the view's template property using the Underscore template method
                    this.template = _.template(CtrTemplate);

                    //log.info(page_obj)
                    if (page_id === 'search' && _.has(page_obj, 'searchterm')){
                        // Dynamically updates the UI with the view's template
                        this.$el.html(this.template({}));

                        this.children.search_results = new SearchResultsView({el: this.$el.find('.content-center-middle')});
                        this.children.search_results.render(page_obj.searchterm);
                        this._sendMsg('pubsub:message', {'channel': 'quick-links', 'links': false} );
                        this._sendMsg('pubsub:message', {channel: 'update-featured', page: page_id} );
                    }
                    else{
                        // user navigated to same page currently on
                        if (_.has(page_obj, 'previous') && page_obj.previous === page_id){
                            if (_.has(page_obj, 'section') && _.isString(page_obj.section) && page_obj.section.length){
                                context._scrollToSection(page_obj.section);
                            }
                        }
                        else{
                            // Dynamically updates the UI with the view's template
                            this.$el.html(this.template({}));

                            this.collections[page_id] = new ArticlesCollection([], {'page_id': page_id});
                            this.collections[page_id].fetch({'cache': true, 'expires': 60 });

                            this.collections[page_id].one('sync', function(){
                                log.info('heard collection done reading models from ajax call');
                                context._renderArticles(page_id);
                                // scroll to section
                                if (_.has(page_obj, 'section') && _.isString(page_obj.section) && page_obj.section.length){
                                    context._scrollToSection(page_obj.section);
                                }
                                var random_num = Math.floor(Math.random() * 9) + 1;
                                log.info(random_num)
                                if (random_num > 1 && random_num % 2 !== 0){
                                    context._sendMsg('pubsub:message', {channel: 'update-featured', page: page_id} );
                                }

                            });
                        }

                    }

                }
                else{
                    log.warn('missing or invalid key "page" in render parameter object');
                }

                // Maintains chainability
                return this;

            },

            /**
             * scroll window to the article with matching title
             * @method _scrollToSection
             * @param {string} section_title
             */
            _scrollToSection : function(section_title){
                var $target;
                if (_.isString(section_title) && section_title.length){
                    if (this.$el.find('[data-article-title="'+section_title+'"]').length){
                        $target = this.$el.find('[data-article-title="'+section_title+'"]');
                    }
                    else if (this.$el.find('[data-section-title="'+section_title+'"]').length){
                        $target = this.$el.find('[data-section-title="'+section_title+'"]');
                    }

                    if ($target && $target.length) {
                        // wait just a moment before performing the scroll
                        var timer = setTimeout(function(){
                            $(window).scrollTo($target, 1500, {'top': '100px'});
                        }, 500);

                    }
                    else{
                        log.warn('Unable to find DOM element with attribute value "'+section_title+'" - _scrollToSection::content-center')
                    }
                }

            },


            /**
             * @method _renderArticles
             * @private
             * @param page_id
             */
            _renderArticles : function(page_id){
                var context = this;
                var sections = [];
                log.info(page_id +' - collection id: '+this.collections[page_id].getID())
                context.children.articles = [];
                log.info(this.collections[page_id].toJSON());
                _.each(this.collections[page_id].models, function(model, key){
                    if (_.keys(model.attributes).length) {
                        var view = new ArticleView({'data': model.toJSON()})
                        context.$el.find('.content-center-middle').append(view.render().$el);
                        context.children.articles.push(view);
                        sections = sections.concat(model.getTitles())
                    }
                });

                this._sendMsg('pubsub:message', {channel: 'quick-links', links: sections, page: page_id} );


            }

        });

        // Returns the View class
        return ContentCenter;

    }

);