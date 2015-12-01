/**
 * Created by kevin on 10/25/2015.
 */

/**
 * Created by kevin on 10/25/2015.
 */

define(['jquery', 'underscore', 'backbone', 'loglevel', 'md5', 'text!templates/sidebar-right.html'],

    function($, _, Backbone, log, md5, SbrTemplate){

        var SideBarRight = Backbone.View.extend({

            el : '#sb-right',

            // View constructor
            initialize: function() {
                var context = this;
                this.xhr_queue = [];
                this.search_terms = ['stock','bond','forex','exchange','market','trade','security','asset','invest','asset', 'cost', 'purchase', 'manage'];
                this.featured_ids = [];

                this._bindPubSub('update-featured',  function(data){  context._pubSubMsgHandler(data); });


            },

            // View Event Handlers
            events: {

            },

            // begin process tp lookup random featured content
            render: function() {
                var context = this;
                this.$el.empty();
                for (var i=0; i < 3; i++){
                    var timer = setTimeout(function(){
                        context._getRandomArticle();
                    }, 100);

                }

            },

            // Renders the view's template to the UI
            _render: function(article) {
                log.info(article)

                // Setting the view's template property using the Underscore template method
                this.template = _.template(SbrTemplate);

                // Dynamically updates the UI with the view's template
                this.$el.append(this.template(article));

                // Maintains chainability
                return this;

            },

            /**
             * Randomize array element order in-place.
             * Using Durstenfeld shuffle algorithm.
             * @method _shuffleArray
             * @param {array}
             * @returns {array}
             * @link http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
             */
            _shuffleArray : function (array) {
                if (_.isArray(array)){
                    for (var i = array.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                    return array;
                }
                else return [];

            },

            _getRandomArticle : function(){
                var context = this;
                var search_term = this._shuffleArray(this.search_terms)[0];
                var params =  {'search':search_term};
                // don't let the featured article search run away with too many queries
                if (this.xhr_queue.length < 10) {
                    var req = $.ajax({
                        url: 'ui/data/page_data.php',
                        data: params,
                        success: function (resp) {
                            if (_.isObject(resp) && _.has(resp, 'results')) {
                                if (_.isArray(resp.results) && resp.results.length) {
                                    // choose a random page article
                                    var invalid_article = true;
                                    var i = 0;
                                    var path = '';
                                    while (invalid_article) {
                                        path = context._shuffleArray(resp.results)[0];
                                        // article path isn't same as current page
                                        if (path.split('.')[0] !== window.location.hash.split('/')[1]) {
                                            //artcle isn't already in feature column
                                            if (_.indexOf(context.featured_ids, md5(path.split('.')[0])) < 0) {
                                                invalid_article = false;
                                            }
                                        }
                                        i++;
                                        if (i > 5) {
                                            // wait a moment, then exit and start over
                                            var timer = setTimeout(function () {

                                                // only proceed if there is less than 2 features on the page
                                                if (context.$el.find('.featured').length < 2) {
                                                    context._getRandomArticle();
                                                }
                                            }, 250);
                                            break;
                                        }
                                    }
                                    context.featured_ids.push(md5(path.split('.')[0]));
                                    // found an article that is on a different page
                                    context._getArticleByPath(path, function (arg) {
                                        context._parseArticleData(arg);
                                    });
                                }
                            }
                        }
                    });
                    this.xhr_queue.push(req);
                }
                else{
                    // cancel all but the last open ajax requests started by this class
                    _.each(context.xhr_queue.slice(0, (context.xhr_queue-2)), function (xhr) {
                        xhr.abort();
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
                    var req = $.ajax({
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
                    this.xhr_queue.push(req);

                }
            },

            /**
             * read the article url, title, and description from the data obect parameter
             * @method _parseArticleData
             * @param {object} data
             * @param {string} search_term
             */
            _parseArticleData : function(data){
                //log.info(JSON.stringify(data));

                var tmpl_obj = {};
                if (_.isObject(data) && _.has(data, 'title') && _.has(data, 'path')) {

                    if ( _.has(data, 'text')){

                        if (_.isArray(data.text)){
                            tmpl_obj.text = data.text.join("\n\r");
                        }else if (_.isString(data.text)){
                            tmpl_obj.text = data.text;
                        }

                        tmpl_obj.title =  data.title;

                    }
                    else if ( _.has(data, 'sections') && _.isArray(data.sections)){
                        var section = this._shuffleArray(data.sections)[0];
                        if (_.has(section, 'heading') && _.has(section, 'text') ){

                            if ( _.isString(section.text)){
                                tmpl_obj.text = section.text;
                            }
                            else if (_.isArray(section.text)) {
                                tmpl_obj.text = section.text.join(' ');
                            }
                            tmpl_obj.title = section.heading;

                        }

                    }
                    if(_.keys(tmpl_obj).length){
                        var path_arr = data.path.split('.');
                        tmpl_obj.url=path_arr[0]+"/"+tmpl_obj.title.toLowerCase().replace(/ /g, '-');
                        tmpl_obj.md5 = md5(data.path.split('.')[0]);
                        //log.info(tmpl_obj)
                        // Calls the view's render method
                        this._render(tmpl_obj);
                    }

                }

            },

            _pubSubMsgHandler : function(data){

                log.info(data);
                this.xhr_queue = [];
                this.featured_ids = [];
                this.$el.find('.featured').each(function(){
                    $(this).remove();
                });
                this.render();

            },

        });

        // Returns the View class
        return SideBarRight;

    }

);