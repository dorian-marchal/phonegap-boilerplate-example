define([
    'jquery',
    'underscore',
    'backbone',
    '__',
    'app/singletons/auth',
    'app/singletons/router',
    'core/views/PageView',
    'text!app/templates/Login.html',
], function ($, _, Backbone, __, auth, router, PageView, template) {
    'use strict';

    return PageView.extend({

        className: 'container',

        layoutOptions: {
            title: __.t('Login::Page')
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
            that.$el.html(that.template({
                __: __,
            }));
            return that;
        },

    });

});
