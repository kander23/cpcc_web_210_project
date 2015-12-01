
define(['jquery', 'underscore', 'backbone', 'loglevel', 'views/app'],

    function($, _, Backbone, log, App) {

        var Router = Backbone.Router.extend({

            initialize : function(){
                log.info('app router started');
                Backbone.Router.prototype.initialize.call(this);

                this.views = {};

                this.last_page = '';

                this.views.app = new App({'el': '#application'});
                /*
                this.views.header = new Header({el:$('header')});

                this.views.nav = new Nav({el:$('nav')});
                this.views.footer = new Footer({el:$('footer')});
                this.views.right_side_bar = new RightSideBar({el:$('#sb-right')});
                this.views.center_content = new CenterContent({el:$('#content-center')});
                this.views.left_side_bar = new LeftSideBar({el:$('#sb-left')});
                */
                Backbone.history.start();
                if (!window.location.hash.length) {
                    window.location.hash = '#/home'
                }


            },



            routes: {
                "search/:query":        'searchRouteHandler',  // #search/kiwis
                ':page':                'navRouteHandler',    // #/home, #/stocks, #/bonds
                ':page/:section':       'navRouteHandler',    // #/home, #/stocks, #/bonds
                "help":                 "help",    // #help


            },

            /**
             handle routes related to routing events on the nav-bar
             @method navRouteHandler
             @param {string} page_id
             */
            navRouteHandler: function(page_id, section_id) {
                log.info('router match: '+page_id+' - '+section_id);
                this.views.app.render({'page':page_id, 'section': section_id, 'previous': this.last_page});
                this.last_page = page_id;
            },

            help: function() {
                log.info('help')
            },

            searchRouteHandler: function(query) {
                log.info('search')
                this.last_page = 'search';
                this.views.app.render({'page':'search', 'searchterm': query});
            }

        });

        // Returns the DesktopRouter class
        return Router;

    }

);



