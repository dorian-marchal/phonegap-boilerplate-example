define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/AppView',
    'text!app/templates/Footer.html',
], function ($, _, Backbone, AppView, template) {
    'use strict';

    return AppView.extend({

        className: 'footer',

        initialize: function () {
            AppView.prototype.initialize.apply(this, arguments);
            this.template = _.template(template);
        },

        render: function () {
            this.$el.html($(this.template()));
            return this;
        },

    });

});
