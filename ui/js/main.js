//The build will inline common dependencies into this file.

requirejs.config({
    baseUrl: './ui/js',
    paths: {
        'loglevel':         ['//cdnjs.cloudflare.com/ajax/libs/loglevel/1.4.0/loglevel.min','vendor/loglevel.min'],
        'underscore':       ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min','vendor/underscore-min'],
        'jquery':           ['//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min','vendor/jquery'],
        'backbone':         ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min','vendor/backbone-min'],
        'text':             ['//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min','vendor/text'],
        'md5' :             ['//cdnjs.cloudflare.com/ajax/libs/blueimp-md5/1.1.1/js/md5.min', 'vendor/md5.min'],
        'fetch-cache':      ['//cdnjs.cloudflare.com/ajax/libs/backbone.fetch-cache/1.1.2/backbone.fetch-cache.min', 'vendor/backbone.fetch-cache.min'],
        'scrollto':         ['//cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min','vendor/jquery.scrollTo.min'],
        /*'bootstrap':        ['vendor/bootstrap']*/

    },
    shim: {
        /*'bootstrap':        ['jquery']*/
        'backbone':         ['underscore'],
        'scrollto':         ['jquery'],
        'fetch-cache' :     ['backbone'],

    },
    /**
     * provide override
     * @link http://stackoverflow.com/questions/23613692/where-do-i-place-global-overrides-in-a-modular-backbone-js-site
     */
    map: {
        '*': { 'backbone': 'backbone-overrides' },
        'backbone-overrides': { 'backbone': 'backbone' }
    }
});


// then in your requires
require(['jquery', 'underscore', 'backbone', 'loglevel', 'routers/router'], function($, _, Backbone, log, Router ) {


    if (jQuery){
        (function($){
            $(document).ready(function() {
                console.log('init')
                log.setLevel('debug', false);
                var router = new Router();
            });
        })(jQuery);
    }

});