define([
    'jquery',
    'backbone',
    'core/AppRouter',
    'app/views/Layout',
    'app/views/Home',
    'app/views/NextPage',
], function ($, Backbone, AppRouter, LayoutView, HomeView, NextPageView) {
    'use strict';


    return AppRouter.extend({

        layout: new LayoutView(),
        homeView: new HomeView(),
        nextPageView: new NextPageView(),

        routes: {
            '': 'home',
            'nextPage': 'nextPage',
        },

        home: function () {
            this.loadPage(this.layout, this.homeView);
        },

        nextPage: function () {
            this.loadPage(this.layout, this.nextPageView);
        },
    });

});
