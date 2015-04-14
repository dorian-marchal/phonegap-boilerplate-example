define([
    'jquery',
    'underscore',
    'backbone',
    '__',
    'core/views/AppPage',
    'text!app/templates/Map.html',
],function ($, _, Backbone, __, AppPage, template) {
    'use strict';

    return AppPage.extend({

        name: 'map',

        className: 'container',

        layoutOptions: {
            title: __.t('Map')
        },

        initialize: function () {
            AppPage.prototype.initialize.apply(this, arguments);
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
