define(function (require) {
    'use strict';

    var globals = require('globals');
    var AppLayout = require('core/views/AppLayout');

    return AppLayout.extend({

        name: 'layout',

        template: require('text!app/templates/Layout.html'),

        subviews: {
            '.header' : require('app/views/Header'),
            '.footer' : require('app/views/Footer'),
        },

        defaultOptions: {
            title: globals.config.appName,
        },

    });

});
