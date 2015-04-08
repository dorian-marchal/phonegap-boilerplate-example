define([
    'jquery',
    'underscore',
    'backbone',
    '__',
    'core/views/PageView',
    'text!app/templates/Map.html',
],function ($, _, Backbone, __, PageView, template) {
    'use strict';

    return PageView.extend({

        className: 'container',

        layoutOptions: {
            title: __.t('Map')
        },

        initialize: function () {
            PageView.prototype.initialize.apply(this, arguments);
            this.template = _.template(template);
        },

        render: function () {
            this.$el.html(this.template({
                __: __,
            }));
            return this;
        },

    });

});
