define([
    'jquery',
    'core/AppController',
    'app/views/Layout',
    'app/views/Login',
    'app/views/Home',
    'app/views/NextPage',
], function ($, AppController, LayoutView, LoginView, HomeView, NextPageView) {
    'use strict';

    var Controller = function() {};

    Controller.prototype = new AppController();

    Controller.prototype.layout = new LayoutView();
    Controller.prototype.loginView = new LoginView();
    Controller.prototype.homeView = new HomeView();
    Controller.prototype.nextPageView = new NextPageView();

    Controller.prototype.home = function () {
        this.loadPage(this.layout, this.homeView);
    },

    Controller.prototype.login = function () {
        this.loadPage(this.layout, this.loginView);
    },

    Controller.prototype.nextPage = function () {
        this.loadPage(this.layout, this.nextPageView);
    },

    return Controller;

});
