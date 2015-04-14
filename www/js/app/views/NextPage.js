define([
    'jquery',
    'underscore',
    'backbone',
    '__',
    'core/views/AppPage',
    'text!app/templates/NextPage.html',
],function ($, _, Backbone, __, AppPage, template) {
    'use strict';

    return AppPage.extend({

        name: 'nextPage',

        className: 'container',

        layoutOptions: {
            title: __.t('NextPage')
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
