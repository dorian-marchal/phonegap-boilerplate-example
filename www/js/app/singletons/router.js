define([
    'core/AppRouter',
], function (AppRouter) {
    'use strict';

    var Router = AppRouter.extend({

        routes: {
            '': 'home',
            'nextPage': 'nextPage',
            'login': 'login',
            'map': 'map',
        },

        home: function () {
            this.controller.home();
        },

        login: function () {
            this.controller.login();
        },

        nextPage: function () {
            this.controller.nextPage();
        },

        map: function () {
            this.controller.map();
        },
    });

    return new Router();

});
