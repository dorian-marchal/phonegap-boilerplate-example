define([
    'config',
    'jquery',
    'underscore',
    'backbone',
    'app/state',
    'app/router',
    'core/views/AppView',
    'text!app/templates/Header.html',
    'core/utils/ApiHelper',
], function (config, $, _, Backbone, state, router, AppView, template, api) {
    'use strict';

    return AppView.extend({

        title: config.appName,

        events : {
            'click [data-action="logout"]' : 'logout',
        },

        initialize: function () {
            AppView.prototype.initialize.apply(this, arguments);
            this.template = _.template(template);
        },

        render: function () {
            this.$el.html($(this.template({
                title: this.title,
                loggedIn: state.loggedIn,
                showAuthButton: state.loggedIn || Backbone.history.fragment !== 'login',
            })));
            return this;
        },

        logout: function() {
            api.post('/logout', {
                success: function() {
                    state.loggedIn = false;
                    router.navigate('/', true);
                }
            });
        },

    });

});
