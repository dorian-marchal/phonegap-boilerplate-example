define([
    'jquery',
    'underscore',
    'backbone',
    'app/state',
    'app/router',
    'core/views/PageView',
    'text!app/templates/Login.html',
    'core/utils/ApiHelper',
], function ($, _, Backbone, state, router, PageView, template, api) {
    'use strict';

    return PageView.extend({

        className: 'container',

        layoutOptions: {
            title: 'Login',
        },

        initialize: function () {
            PageView.prototype.initialize.apply(this, arguments);
            var that = this;

            that.template = _.template(template);
        },

        events: {
            'submit .login-form' : 'login',
        },

        login: function(event) {
            event.preventDefault();

            api.post('/login', {
                data: {
                    username: $('[name="username"]').val(),
                    password: $('[name="password"]').val(),
                },
                success: function() {
                    state.loggedIn = true;
                    router.navigate('/', true);
                },
                error: function() {
                    console.log('Wrong creds');
                },
            });

        },

        render: function () {
            var that = this;
            that.$el.html(that.template());
            return that;
        },

    });

});
