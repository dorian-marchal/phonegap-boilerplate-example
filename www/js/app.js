require(['config'], function(config) {
    'use strict';

    require.config(config);

    require([
        'domReady!',
        'jquery',
        'backbone',
        'fastclick',
        'app/router',
        'app/Controller',
        'app/state'
    ], function (domReady, $, Backbone, FastClick, router, Controller, state) {

        FastClick.attach(document.body);

        $.ajaxSetup({
            xhrFields: {
                withCredentials: true,
            }
        });

        state.checkLogin(function(loggedIn) {

            router.setController(new Controller());
            Backbone.history.start();
        });
    });
});
