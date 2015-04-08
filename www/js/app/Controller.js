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

    var Controller = function() {};

    Controller.prototype = new AppController();

    Controller.prototype.layout = new LayoutView();
    Controller.prototype.loginView = new LoginView();
    Controller.prototype.homeView = new HomeView();
    Controller.prototype.nextPageView = new NextPageView();
    Controller.prototype.mapView = new MapView();

    Controller.prototype.home = function () {
        this.loadPage(this.layout, this.homeView);
    };

    Controller.prototype.login = function () {
        this.loadPage(this.layout, this.loginView);
    };

    Controller.prototype.nextPage = function () {
        this.loadPage(this.layout, this.nextPageView);
    };

    Controller.prototype.map = function () {
        this.loadPage(this.layout, this.mapView);
    };

    return Controller;

});
