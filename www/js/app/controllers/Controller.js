define(function(require) {
    'use strict';

    var AppController = require('core/AppController');

    return AppController.extend({

        name: 'ctrl',

        useLayouts: [
            require('app/views/Layout'),
        ],

        usePages: [
            require('app/views/Login'),
            require('app/views/Home'),
            require('app/views/NextPage'),
            require('app/views/Map'),
        ],

        layoutForPages: {
            login: 'layout',
            home: 'layout',
            nextPage: 'layout',
            map: 'layout',
        },
    });
});
