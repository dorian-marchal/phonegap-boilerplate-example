define([
    'jquery',
    'backbone',
    'core/AppRouter',
    'app/views/Layout',
    'app/views/Login',
    'app/views/Home',
    'app/views/NextPage',
], function ($, Backbone, AppRouter, LayoutView, LoginView, HomeView, NextPageView) {
    'use strict';

    var Router = AppRouter.extend({

        layout: new LayoutView(),
        loginView: new LoginView(),
        homeView: new HomeView(),
        nextPageView: new NextPageView(),

        routes: {
            '': 'home',
            'nextPage': 'nextPage',
            'login': 'login',
        },

        home: function () {
            this.loadPage(this.layout, this.homeView);
        },

        login: function () {
            this.loadPage(this.layout, this.loginView);
        },

        nextPage: function () {
            this.loadPage(this.layout, this.nextPageView);
        },
    });

    return new Router();

});
