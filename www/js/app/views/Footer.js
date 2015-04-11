define([
    'jquery',
    'underscore',
    'backbone',
    '__',
    'core/views/AppView',
    'text!app/templates/Footer.html',
], function ($, _, Backbone, __, AppView, template) {
    'use strict';

    return AppView.extend({

        className: 'footer',

        initialize: function () {
            AppView.prototype.initialize.apply(this, arguments);
            this.tpl = _.template(template);
        },

        render: function () {
            this.$el.html($(this.tpl({
                __: __,
            })));
            return this;
        },

    });

});
