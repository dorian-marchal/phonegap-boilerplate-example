define([
    'core/AppRouter',
    'app/controllers/Controller',
], function (AppRouter, Controller) {
    'use strict';

    var Router = AppRouter.extend({

        uses: [
            Controller,
        ]
    });

    return Router;

});
