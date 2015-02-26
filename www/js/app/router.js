define([
    'jquery',
    'backbone',
    'core/AppRouter',
    'app/views/Layout',
    'app/views/Home',
    'app/views/NextPage',
], function ($, Backbone, AppRouter, LayoutView, HomeView, NextPageView) {
    'use strict';

    var layout = new LayoutView();

    var homeView = new HomeView({
        layout: layout
    });

    var nextPageView = new NextPageView({
        layout: layout
    });

    return AppRouter.extend({

        routes: {
            '': 'home',
            'nextPage': 'nextPage',
        },

        home: function () {
            this.loadPage(homeView);
        },

        nextPage: function () {
            this.loadPage(nextPageView);
        },
    });

});
