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

    var homeView = new HomeView();
    var nextPageView = new NextPageView();

    return Backbone.Router.extend({

        routes: {
            '': 'home',
            'nextPage': 'nextPage',
        },

        home: function () {
            homeView.delegateEvents();
            layout.setOptions({
                title: 'Accueil',
            });
            this.loadPage(homeView);
        },

        nextPage: function () {
            nextPageView.delegateEvents();
            layout.setOptions({
                title: 'NextPage',
            });
            this.loadPage(nextPageView);
        },
    });

});
