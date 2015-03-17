/**
 * Singleton used to store some state var of the app.
 */
define([
    'core/utils/ApiHelper',
], function (api) {

    'use strict';

    var State = function () {

        this.loggedIn = false;

        this.checkLogin = function(callback) {
            callback = callback || function() {};

            api.get('/logged-in', {
                success: function() {
                    this.loggedIn = true;
                    console.log('success');
                    callback(true);
                },
                error: function() {
                    this.loggedIn = false;
                    console.log('error');
                    callback(false);
                },
            });
        };
    };

    return new State();
});
