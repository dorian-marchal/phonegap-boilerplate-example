define([
    'jquery',
    'underscore',
    'core/views/AppView',
], function ($, _, AppView) {
    'use strict';

    return AppView.extend({

        /**
         * The template named "viewName" will be
         * bound to the view.
         */
        initialize: function () {
            AppView.prototype.initialize.apply(this, arguments);
            var that = this;

            // Add general layout options
            that.layoutOptions = that.layoutOptions || {};
        },

    });

});
