/**
 * Created by kevin on 10/25/2015.
 */

define(['jquery', 'underscore', 'backbone', 'loglevel', 'views/search', 'text!templates/quick-links.html'],

    function($, _, Backbone, log, SearchView, QlTemplate){

        var QuickLinks = Backbone.View.extend({

            el : '#sb-left',

            // View constructor
            initialize: function() {

                var context = this;

                this.options = {};
                this.options.data = {};

                this._bindPubSub('quick-links',  function(data){  context._pubSubMsgHandler(data); });


                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {
                try {
                    // Setting the view's template property using the Underscore template method
                    this.template = _.template(QlTemplate);

                    // Dynamically updates the UI with the view's template
                    this.$el.html(this.template(this.options.data));

                    // Maintains chainability
                    return this;
                }
                catch(e){
                    log.error('Error: '+ e.message+' - render::QuickLinks');
                }

            },

            _pubSubMsgHandler : function(data){

                log.info(data)
                this.options.data = data;
                this.render();

            },


        });

        // Returns the View class
        return QuickLinks;

    }

);