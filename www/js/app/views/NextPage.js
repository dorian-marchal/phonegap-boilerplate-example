define([
    'jquery',
    'underscore',
    'backbone',
    '__',
    'core/views/PageView',
    'text!app/templates/NextPage.html',
],function ($, _, Backbone, __, PageView, template) {
    'use strict';

    return PageView.extend({

        className: 'container',

        layoutOptions: {
            title: __.t('NextPage')
        },

        initialize: function () {
            PageView.prototype.initialize.apply(this, arguments);
            this.tpl = _.template(template);
        },

        render: function () {
            this.$el.html(this.tpl({
                __: __,
            }));
            return this;
        },

    });

});
