define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/AppView',
    'text!app/templates/Header.html',
], function ($, _, Backbone, AppView, template) {
    'use strict';

    return AppView.extend({

        title: 'Phonegap Boilerplate',

        initialize: function () {
            AppView.prototype.initialize.apply(this, arguments);
            this.template = _.template(template);
        },

        render: function () {
            this.$el.html($(this.template({
                title: this.title,
            })));
            return this;
        },

    });

});
