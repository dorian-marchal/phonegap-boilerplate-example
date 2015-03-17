require(['config'], function(config) {
    'use strict';

    require.config(config);

    require([
        'domReady!',
        'jquery',
        'backbone',
        'fastclick',
        'app/router',
        'core/utils/State'
    ], function (domReady, $, Backbone, FastClick, Router, state) {

        FastClick.attach(document.body);

        $.ajaxSetup({
            xhrFields: {
                withCredentials: true,
            }
        });

        state.checkLogin(function(loggedIn) {
            console.log(loggedIn);
        });

        var router = new Router();
        Backbone.history.start();
    });
});
