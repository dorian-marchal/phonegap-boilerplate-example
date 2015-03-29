define([
    'jquery',
    'underscore',
    'backbone',
    'app/auth',
    'app/router',
    'core/views/PageView',
    'text!app/templates/Login.html',
    'core/utils/ApiHelper',
], function ($, _, Backbone, auth, router, PageView, template, api) {
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

            auth.login(
                $('[name="username"]').val(),
                $('[name="password"]').val(),
                function(loginSuccess) {
                    if (loginSuccess) {
                        router.navigate('/', true);
                    }
                    else {
                        console.log('Wrong creds');
                    }
                }
            );

        },

        render: function () {
            var that = this;
            that.$el.html(that.template());
            return that;
        },

    });

});
