
define([
    'jquery',
    'underscore',
    'backbone',
    'loglevel',
    'views/header',
    'views/nav',
    'views/sidebar-left',
    'views/sidebar-right',
    'views/content-center',
    'views/footer',
    ],
    function($, _, Backbone, log, HeaderView, NavView, SidebarLeftView, SideBarRightView, ContentCenterView, FooterView){

        var App = Backbone.View.extend({

            children: {},

            // View constructor
            initialize: function() {

                this.children.header = new HeaderView();
                this.children.nav = new NavView({el : 'nav'});
                this.children.sidebar_left = new SidebarLeftView();
                this.children.content_center = new ContentCenterView();
                this.children.sidebar_right = new SideBarRightView();
                this.children.footer = new FooterView();


            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            /**
             * render child views to DOM
             * @method render
             * @param obj contains key 'page' that is the navigation route selected by the user
             * @returns {App}
             */
            render: function(obj) {

                this._renderContainer();

                this.children.content_center.render(obj);

                /*
                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                */
                // Maintains chainability
                return this;

            },

            /**
             * render non content page components - header, footer, nav, sidebars
             * @private
             * @method _renderContainer
             */
            _renderContainer : function(){
                var attr_value = parseInt(this.$el.attr('data-render-count'), 10);
                if (isNaN(attr_value) || attr_value === 0  ){
                    _.each(_.omit(this.children, 'content_center'), function (view, key) {
                        log.info('render child view: ' + key);
                        view.render();
                    });

                    if (this.$el.hasClass('hidden')) {
                        this.$el.removeClass('hidden');
                    }
                    this.$el.attr('data-render-count', 1);
                }
                this.$el.attr('data-render-count', (attr_value+1));

            },



        });

        // Returns the View class
        return App;

    }

);