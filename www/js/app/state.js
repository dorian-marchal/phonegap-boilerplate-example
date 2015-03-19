/**
 * Singleton used to store some state var of the app.
 */
define([
    'core/utils/ApiHelper',
], function (api) {

    'use strict';

    var AppState = function () {

        var that = this;
        this.loggedIn = false;

        this.checkLogin = function(callback) {
            callback = callback || function() {};

            api.get('/logged-in', {
                success: function() {
                    that.loggedIn = true;
                    console.log('success');
                    callback(true);
                },
                error: function() {
                    that.loggedIn = false;
                    console.log('error');
                    callback(false);
                },
            });
        };
    };

    return new AppState();
});
