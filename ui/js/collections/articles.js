/**
 * Created by kevin on 10/25/2015.
 */

/**
 * Created by kevin on 10/25/2015.
 */

define(['underscore', 'backbone', 'loglevel', 'models/article', 'fetch-cache'],

    function(_, Backbone, log, ArticleModel){

        var Articles = Backbone.Collection.extend({


            'urlRoot' : './ui/data/page_data.php',
            'url' : function(){
                var result = this.urlRoot;
                try{
                    if(!_.isString(this.options.page_id)){
                        throw new Error('missing class option "page id"');
                    }
                    result += '?page='+this.options.page_id;
                }
                catch(e){
                    log.warn('Error: '+ e.message+' Backbone.Collection');
                }
                return result;
            },

            'model' : ArticleModel,

            // Collection constructor
            initialize: function(model_data, options) {

                this.options =  {};

                this.models = [];

                log.info('article collection init');
                if(_.isObject(options) && _.has(options, 'page_id')){
                   this.options.page_id = options.page_id
                }
                this.options.uuid = this.getUUID();

            },




            parse: function(res) {
                var context = this;
                if (_.isObject(res) && _.has(res, 'articles') && _.isArray(res.articles) ){
                    _.each(res.articles, function(obj, key){
                        if (_.isObject(obj) && _.keys(obj).length){
                            //log.info(obj)
                            context.add(new ArticleModel(obj))
                            //log.info(context.at(context.models.length-1).toJSON())
                        }
                    });
                    this.trigger('sync');

                }
            },

            /**
             * get the uuid generated when the class is initialized
              @method getID
              @returns {string}
            */
            getID : function(){
                result = '';
                if (_.isObject(this.options) && _.has(this.options, 'uuid') && _.isString(this.options.uuid)){
                    result = this.options.uuid;
                }
                return result;

            },

            /**
             *
             * add local caching to the ajax responses
             * @returns {*}
             */
            fetch : function(options) {

                log.info(options);

                //do specific pre-processing

                //Call Backbone's fetch
                return Backbone.Collection.prototype.fetch.call(this, options);
            },


        });

        // Returns the Collection class
        return Articles;

    }

);