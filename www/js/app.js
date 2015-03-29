require(['config'], function(config) {
    'use strict';

    require.config(config);

    require([
        'domReady!',
        'jquery',
        'backbone',
        'fastclick',
        'app/router',
        'app/Controller',
        'app/state'
    ], function (domReady, $, Backbone, FastClick, router, Controller, state) {

        FastClick.attach(document.body);

        if (config.debug.useWeinre) {
            $('head').append('<script src="http://' + config.debug.weinreHost + ':' + config.debug.weinrePort + '/target/target-script-min.js#anonymous"></script>');
        }

        state.checkLogin(function() {

            router.setController(new Controller());
            Backbone.history.start();
        });
    });
});
