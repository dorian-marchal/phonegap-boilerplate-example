define([
    'globals',
    'jquery',
    'underscore',
    'backbone',
    '__',
    'app/singletons/auth',
    'core/views/AppPage',
    'text!app/templates/Login.html',
], function (globals, $, _, Backbone, __, auth, AppPage, template) {
    'use strict';

    return AppPage.extend({

        name: 'login',

        className: 'container',

        layoutOptions: {
            title: __.t('Login::Page')
        },

        initialize: function () {
            AppPage.prototype.initialize.apply(this, arguments);
            var that = this;

            that.tpl = _.template(template);
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
                        globals.router.navigate('/', true);
                    }
                    else {
                        console.log('Wrong creds');
                    }
                }
            );

        },

        render: function () {
            var that = this;
            that.$el.html(that.tpl({
                __: __,
            }));
            return that;
        },

    });

});
