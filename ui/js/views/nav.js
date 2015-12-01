/**
 * Created by kevin on 10/25/2015.
 */

define(['jquery', 'underscore', 'backbone', 'loglevel', 'views/search', 'text!templates/nav.html', 'text!templates/nav-small.html'],

    function($, _, Backbone, log, SearchView, NavTemplate, NavSmallTemplate){

        var Nav = Backbone.View.extend({



            endpoints : ['Home','Stocks','Bonds','Forex','Strategies','About Us'],

            // View constructor
            initialize: function(options) {

                if (options && _.has(options, 'mode') && options.mode === 'small'){
                    this.list_elem_class='';
                    this.template = _.template(NavSmallTemplate);
                }
                else{
                    this.template = _.template(NavTemplate);
                    this.list_elem_class='padding-half';
                    this.children = {
                        'search' : new SearchView({'mode': 'small'}),
                    };
                }



                // Calls the view's render method
                this.render();
                this._bindPubSub('nav');

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {


                // Dynamically updates the UI with the view's template
                this.$el.html(this.template({'links':this.endpoints, 'link_class': this.list_elem_class}));
                if (this.children) {
                    this.children.search.setElement(this.$el.find('.content-sm-right'));
                    this.children.search.render();
                }
                // Maintains chainability
                return this;

            }

        });

        // Returns the View class
        return Nav;

    }

);