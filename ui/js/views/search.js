/**
 * Created by kevin on 10/25/2015.
 */

/**
 * Created by kevin on 10/25/2015.
 */

define(['jquery', 'underscore', 'backbone', 'loglevel', 'text!templates/big-search.html', 'text!templates/small-search.html'],

    function($, _, Backbone, log, BgSrchTemplate, SmSrchTemplate){

        var Search = Backbone.View.extend({


            // View constructor
            initialize: function(options) {
                this.options = {};

                if (_.isObject(options) && _.has(options, 'mode')){
                    this.setMode(options.mode);
                }

                this.options.templates = {
                    'large' : BgSrchTemplate,
                    'small' : SmSrchTemplate,
                };

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {
                'keydown .search' : function(e){ this.searchHandler(e); },
                'click .btn' : function(e){ this.searchHandler(e); },
            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(this.options.templates[this.options.mode]);

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template({}));

                // Maintains chainability
                return this;

            },

            /**
             set the search template to be rendered, small are large
             @method setMode
             @param {string|integer} mode large/small, or number != 0 sets to large
             */
            setMode : function(mode){
                this.options.mode = 'small';
                if (_.isString(mode) && mode.toLowerCase() === 'large'){
                    this.options.mode = 'large';
                }
                else if (_.isNumber(mode) && mode !== 0){
                    this.options.mode = 'large';
                }
            },

            /**
             *
             * @method searchHandler
             */
            searchHandler : function(e){
                var context = this;
                var $input = this.$el.find('input.search');
                var value = $input.val();
                var proceed = false;
                if (e.type === 'keydown' && e.which == 13) {
                    log.info('search submit - enter key: '+value);
                    proceed = true;
                }
                else if (e.type === 'click'){
                    log.info('search submit - button click: '+value);
                    proceed = true;
                }
                if (proceed && value && value.length){

                    window.location.hash = '/search/'+value;

                }
            },

        });

        // Returns the View class
        return Search;

    }

);