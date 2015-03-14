define([
    'config',
    'jquery',
    'underscore',
    'backbone',
    'core/views/AppView',
    'text!app/templates/Header.html',
], function (config, $, _, Backbone, AppView, template) {
    'use strict';

    return AppView.extend({

        title: config.appName,

        initialize: function () {
            AppView.prototype.initialize.apply(this, arguments);
            this.template = _.template(template);
        },

        render: function () {
            this.$el.html($(this.template({
                title: this.title,
                loggedIn: true,
            })));
            return this;
        },

    });

});
