/**
 * $.ajax wrapper to easily make request to the server API
 * Example :
 *     var api = new ApiHelper('localhost', 8080);
 *     api.get('/mymodels', )
 */
define([
    'config',
    'jquery',
], function (config, $) {

    'use strict';

    var ApiHelper = function (serverHost, serverPort) {

        this._ajax = function(method, url, settings) {
            settings = settings || {};

            settings.method = method;
            settings.url = 'http://' + serverHost + ':' + serverPort + url;
            return $.ajax.apply(this, settings);
        };

        this.get = function(url, settings) {
            return this._ajax('GET', url, settings);
        };

        this.post = function(url, settings) {
            return this._ajax('POST', url, settings);
        };

    };

    return new ApiHelper(config.server.host, config.server.port);
});
