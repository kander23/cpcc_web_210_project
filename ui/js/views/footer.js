/**
 * Created by kevin on 10/25/2015.
 */

define(['jquery', 'underscore', 'backbone', 'loglevel', 'text!templates/footer.html', 'views/nav'],

    function($, _, Backbone, log, FtrTemplate, NavigationView){

        var Footer = Backbone.View.extend({

            el : 'footer',

            // View constructor
            initialize: function() {

                this.children = {
                    'nav' : new NavigationView({'mode': 'small', 'tagName': 'nav'}),
                };

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method

                this.template = _.template(FtrTemplate);

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template( {'year': new Date().getFullYear() }));

                this.$el.find('.footer-nav-links').html(this.children.nav.render().$el);

                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return Footer;

    }

);