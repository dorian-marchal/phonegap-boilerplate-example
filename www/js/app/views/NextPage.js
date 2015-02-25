define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/PageView',
    'text!app/templates/NextPage.html',
],function ($, _, Backbone, PageView, template) {
    'use strict';

    return PageView.extend({

        className: 'container',

        layoutOptions: {
            title: 'Home',
        },

        initialize: function () {
            PageView.prototype.initialize.apply(this, arguments);
            this.template = _.template(template);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

    });

});
