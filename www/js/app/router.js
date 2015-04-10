define([
    'core/AppRouter',
    'app/controllers/Controller',
], function (AppRouter, Controller) {
    'use strict';

    var controller = new Controller();

    var Router = AppRouter.extend({

        routes: {
            '': 'home',
            'nextPage': 'nextPage',
            'login': 'login',
            'map': 'map',
        },

        home: function () {
            controller.home();
        },

        login: function () {
            controller.login();
        },

        nextPage: function () {
            controller.nextPage();
        },

        map: function () {
            controller.map();
        },
    });

    return Router;

});
