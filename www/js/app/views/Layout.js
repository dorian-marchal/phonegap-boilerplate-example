define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/AppView',
    'text!app/templates/Layout.html',
    'app/views/Header',
    'app/views/Footer',
], function ($, _, Backbone, AppView, template, HeaderView, FooterView) {
    'use strict';

    var header = new HeaderView();
    var footer = new FooterView();

    return AppView.extend({

        initialize: function () {
            AppView.prototype.initialize.apply(this, arguments);
            this.template = _.template(template);

            this.options = {
                title: 'Backbone Boilerplate',
            };
        },

        setOptions: function(options) {
            $.extend(this.options, options);
        },

        setContentView: function(contentView) {
            this.contentView = contentView;
        },

        render: function() {
            $('title').html(this.options.title);
            this.$el = $(this.template());
            this.assign(header, '.header', {
                title: this.options.title,
            });
            this.$el.find('.content').html(this.contentView.render().$el);
            // this.assign(this.contentView, '.content');
            this.assign(footer, '.footer');
            return this;
        },

    });

});
