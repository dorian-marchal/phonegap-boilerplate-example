define([
    'globals',
    'jquery',
    'core/views/AppLayout',
    'text!app/templates/Layout.html',
    'app/views/Header',
    'app/views/Footer',
], function (globals, $, AppLayout, template, HeaderView, FooterView) {
    'use strict';

    var header = new HeaderView();
    var footer = new FooterView();

    return AppLayout.extend({

        name: 'layout',

        defaultOptions: {
            title: globals.config.appName,
        },

        template: template,

        render: function() {
            $('title').html(this.options.title);
            this.$el = $(this.tpl(this.options));

            header.title = this.options.title;
            this.assign(header, '.header');

            this.$el.find('.content').html(this.pageView.render().$el);

            this.assign(footer, '.footer');
            return this;
        },

    });

});
