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
            this.loadPage(layout, homeView, {
                title: 'Accueil',
            });
        },

        nextPage: function () {
            this.loadPage(layout, nextPageView, {
                title: 'NextPage',
            });
        },
    });

});
