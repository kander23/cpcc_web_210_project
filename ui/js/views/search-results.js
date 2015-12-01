/**
 * Created by kevin on 11/22/2015.
 */
/**
 * Created by kevin on 10/25/2015.
 */

/**
 * Created by kevin on 10/25/2015.
 */

define(['jquery',
        'underscore',
        'backbone',
        'md5',
        'loglevel',
        'text!templates/search-result.html',
        'text!templates/search-results-container.html'
], function($, _, Backbone, md5, log, SearchResultTmpl, SearchResultsContainerTmpl){

        var SearchResults = Backbone.View.extend({


            // View constructor
            initialize: function(options) {
                this.options = {};



                this.options.templates = {};
                this.options.templates['container'] = _.template(SearchResultsContainerTmpl);
                this.options.templates['result'] = _.template(SearchResultTmpl);
                this.search_term = '';

            },

            // View Event Handlers
            events: {

            },

            /**
             * @method _renderResult
             */
            _renderResult : function(data){

                if ( _.isObject(data) && _.has(data, 'md5') && _.isString(data.md5)){
                    // prevent duplicate search results
                    if (this.$el.find('li[data-id="'+data.md5+'"]').length === 0 ){
                        this.$el.find('ul').append(this.options.templates.result(data));
                    }
                }


            },

            // begin process to renders the search results the UI
            /**
             *
             * @method render
             * @param search_term
             */
            render: function(search_term) {
                log.info('RENDER SEARCH RESULTS')
                this.$el.html(this.options.templates.container({}));
                this.doSearch(search_term);


                // Setting the view's template property using the Underscore template method
                //this.template = _.template(this.options.templates[this.options.mode]);

                // Dynamically updates the UI with the view's template
               // this.$el.html(this.template({}));

                // Maintains chainability
                return this;

            },



            /**
             *
             * @method searchHandler
             * @param {string} search_term
             */
            doSearch : function(search_term){
                var context = this;

                if (_.isString(search_term) && search_term.length){
                     this.search_term = search_term;
                     var params =  {'search':search_term};
                     $.ajax({
                         url: 'ui/data/page_data.php',
                         data: params,
                         success : function(resp){
                             if (_.isObject(resp) && _.has(resp,'results')) {
                                context._searchResultHandler(resp.results);
                             }
                         }
                     });

                }
            },


            /**
             * retrieve an article from the server based on the path
             * @method _getArticleByPath
             * @param {string} path keys needed to walk array to get an article
             * @param {function} callback
             */
            _getArticleByPath : function(path, callback){
                if (_.isString(path) && path.length){
                    $.ajax({
                        url: 'ui/data/page_data.php',
                        data: {'article':true, 'path': path},
                        success : function(resp){
                            if (_.isFunction(callback)) {
                                //log.info(JSON.stringify(resp))
                                if (_.isObject(resp) && _.has(resp, 'result')){
                                    callback(resp.result);
                                }
                            }
                        }
                    });

                }
            },

            /**
             *
             * @method _searchResultHandler
             * @param {object} data
             */
            _searchResultHandler : function(data){

                var context = this;
                // display search results by loading up target articles
                if(_.isArray(data) && data.length){
                    log.info(data)
                    var callback = function(data){

                        if (_.isObject(data) && _.has(data, 'title') && _.has(data, 'path')) {
                            if ( _.has(data, 'text')){
                                var tmpl_obj = {};
                                tmpl_obj.title =  data.title;

                                if (_.isArray(data.text)){
                                    tmpl_obj.text = data.text.join("\n\r");
                                }else if (_.isString(data.text)){
                                    tmpl_obj.text = data.text;
                                }

                                tmpl_obj.md5 = md5(tmpl_obj.title+'.'+tmpl_obj.text);
                                var path_arr = data.path.split('.');
                                tmpl_obj.url=path_arr[0]+"/"+tmpl_obj.title.toLowerCase().replace(/ /g, '-');

                                context._renderResult(tmpl_obj);

                            }
                            else if ( _.has(data, 'sections') && _.isArray(data.sections)){
                                // render each section that matches the search term
                                _.each(data.sections, function(v, k){
                                    if (_.has(v, 'heading') && _.has(v, 'text') ){
                                        var section_text = '';
                                        if ( _.isString(v.text)){
                                            section_text = v.text;
                                        }
                                        else if (_.isArray(v.text)){
                                            section_text = v.text.join(' ');
                                        }

                                        if (section_text.toLowerCase().indexOf(context.search_term.toLowerCase()) >= 0){
                                            var tmpl_obj = {};
                                            tmpl_obj.title = v.heading;
                                            tmpl_obj.text = section_text;
                                            tmpl_obj.md5 = md5(v.heading+'.'+v.text);
                                            var path_arr = data.path.split('.');
                                            tmpl_obj.url=path_arr[0]+"/"+v.heading.toLowerCase().replace(/ /g, '-');

                                            context._renderResult(tmpl_obj);
                                        }

                                    }

                                });

                            }

                        }

                    };

                    _.each(data, function (v, k) {
                        if (_.isString(v) && v.length) {

                            context._getArticleByPath(v, callback);
                        }

                    });


                }
                else{
                    // no search result matches
                    var tmpl_obj = {
                        'title' : '&nbsp;',
                        'text' : '',
                        'search_term' : this.search_term,
                        'url' : ''
                    };
                    tmpl_obj.md5 = md5(tmpl_obj.title+'.'+tmpl_obj.text);
                    this._renderResult(tmpl_obj);
                }

            },

        });

        // Returns the View class
        return SearchResults;

    }

);