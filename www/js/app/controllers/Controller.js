define([
    'jquery',
    'core/AppController',
    'app/views/Layout',
    'app/views/Login',
    'app/views/Home',
    'app/views/NextPage',
    'app/views/Map',
], function ($, AppController, LayoutView, LoginView, HomeView, NextPageView, MapView) {
    'use strict';

    var Controller = AppController.extend({

        route: 'ctrl',

        layout: new LayoutView(),
        loginView: new LoginView(),
        homeView: new HomeView(),
        nextPageView: new NextPageView(),
        mapView: new MapView(),

        home: function () {
            this.loadPage(this.layout, this.homeView);
        },

        login: function () {
            this.loadPage(this.layout, this.loginView);
        },

        nextPage: function () {
            this.loadPage(this.layout, this.nextPageView);
        },

        map: function () {
            this.loadPage(this.layout, this.mapView);
        },
    });

    return Controller;

});
