define([
    'core/AppRouter',
    'app/controllers/Controller',
], function (AppRouter, Controller) {
    'use strict';

    var Router = AppRouter.extend({

        uses: [
            Controller,
        ],

        customRoutes: {
            '' : 'home',
            ':action(/*params)' : 'simpleAction',
        },

        home: function() {
            this.callAction('ctrl', 'home');
        },

        simpleAction: function(action, stringParams) {
            this.routeAction('ctrl', action, stringParams);
        },
    });

    return Router;

});
