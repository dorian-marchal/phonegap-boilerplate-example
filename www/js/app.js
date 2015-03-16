require(['config'], function(config) {
    'use strict';

    require.config(config);

    require(['domReady!', 'jquery', 'backbone', 'fastclick', 'app/router'], function (domReady, $, Backbone, FastClick, Router) {

        FastClick.attach(document.body);

        $.ajaxSetup({
            xhrFields: {
                withCredentials: true,
            }
        });

        var loggedIn = false;

        var router = new Router();
        Backbone.history.start();
    });
});
