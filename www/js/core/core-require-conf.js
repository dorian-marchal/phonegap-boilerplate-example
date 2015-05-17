define({

    // RequireJS configuration.
    // Do not edit this file !
    // To add require configuration, edit `www/js/core.js`

    // You app base urlwithout trailing slash
    baseUrl: '',

    paths: {
        core: 'js/core',
        app: 'js/app',
        globals: 'js/app/singletons/globals',
        __: 'js/app/singletons/i18n',
        jquery: 'js/lib/jquery.min',
        backbone: 'js/lib/backbone',
        underscore: 'js/lib/underscore-min',
        text: 'js/lib/text',
        fastclick: 'js/lib/fastclick',
        domReady: 'js/lib/domReady',
        async: 'js/lib/async',
        i18next: 'js/lib/i18next',
        gm_async: 'js/lib/gm_async',
        gmaps: 'js/lib/gmaps',
        pageslider: 'js/lib/page-slider.min',
        google_maps: 'http://maps.google.com/maps/api/js?sensor=true',
    },

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        i18next: {
            exports: 'i18n'
        },
        gmaps: {
            deps: [
                'gm_async!google_maps',
            ],
            exports: 'GMaps'
        },
    },
});
