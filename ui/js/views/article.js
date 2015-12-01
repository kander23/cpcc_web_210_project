/**
 * Created by kevin on 10/25/2015.
 */

define(['jquery', 'underscore', 'backbone', 'loglevel', 'models/article', 'text!templates/article.html'],

    function($, _, Backbone, log, ArticleModel, ArticleTemplate){

        var Article = Backbone.View.extend({

            tagName: 'div',

            attributes : {
                'class' : 'row'
            },

            'model': {},

            // View constructor
            initialize: function(options) {
                if (_.has(options, 'data')){
                    this.model = new ArticleModel(options.data);
                }
            },

            // View Event Handlers
            events: {

            },

            /**
             * @method render
             * @param page_id
             * @returns {Article}
             */
            render: function(data) {
                //log.info('article render'+JSON.stringify(this.model.toJSON()));

                // Setting the view's template property using the Underscore template method
                this.template = _.template(ArticleTemplate);

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template(this.model.toJSON()));


                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return Article;

    }

);