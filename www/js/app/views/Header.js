define([
    'globals',
    'jquery',
    'underscore',
    'backbone',
    '__',
    'app/singletons/auth',
    'core/views/AppView',
    'text!app/templates/Header.html',
], function (globals, $, _, Backbone, __, auth, AppView, template) {
    'use strict';

    return AppView.extend({

        events : {
            'click [data-action="logout"]' : 'logout',
        },

        initialize: function () {
            AppView.prototype.initialize.apply(this, arguments);
            this.tpl = _.template(template);
        },

        render: function () {
            this.$el.html($(this.tpl({
                __: __,
                title: this.options.title,
                loggedIn: auth.loggedIn,
                showAuthButton: auth.loggedIn || Backbone.history.fragment !== 'login',
            })));
            return this;
        },

        logout: function() {
            auth.logout(function() {
                globals.router.navigate('/', true);
            });
        },

    });

});
