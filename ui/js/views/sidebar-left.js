/**
 * Created by kevin on 10/25/2015.
 */

define(['jquery', 'underscore', 'backbone', 'loglevel', 'views/search','views/quick-links', 'text!templates/sidebar-left.html'],

    function($, _, Backbone, log, SearchView, QuickLinksView, SblTemplate){

        var SideBarLeft = Backbone.View.extend({

            el : '#sb-left',

            // View constructor
            initialize: function() {

                this.children = [
                    { 'name': 'quick-links', 'view' : new QuickLinksView() },
                    /*{ 'name': 'search', 'view' : new SearchView({'mode': 'large'}) },*/

                ];
                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(SblTemplate);

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template({'rows': this.children}));
                _.each(this.children, function(child, idx){
                    child.view.setElement(this.$el.find('.rownum_'+idx));
                    child.view.render();

                }, this);


                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return SideBarLeft;

    }

);