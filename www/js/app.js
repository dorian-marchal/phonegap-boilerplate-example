require(['config'], function(config) {
    'use strict';

    require.config(config);

    require([
        'domReady!',
        'jquery',
        'backbone',
        'fastclick',
        'app/router',
        'app/state'
    ], function (domReady, $, Backbone, FastClick, Router, state) {

        FastClick.attach(document.body);

        $.ajaxSetup({
            xhrFields: {
                withCredentials: true,
            }
        });

        state.checkLogin(function(loggedIn) {
            Backbone.history.start();
        });
    });
});
