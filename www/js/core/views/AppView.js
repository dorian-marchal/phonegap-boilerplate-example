/**
 * A base view that extends from Backbone.View.
 * All the app views must inherit from this.
 * The general code of the views goes here.
 * @class AppView
 */
 define([
    'globals',
    'jquery',
    'backbone',
], function (globals, $, Backbone) {
    'use strict';

    return Backbone.View.extend({

        /**
         * Bind a subview to an element via a selector : render the subview in
         * the element node (a descendent of the current view).
         * @param {AppView} view The view to bind
         * @param {String} selector jQuery selector of the node element
         */
        assign : function (view, selector) {
            view.setElement(this.$(selector)).render();
        },

        initialize: function () {
            Backbone.View.prototype.initialize.apply(this);
            var that = this;

            that.events = that.events || {};

            // Some default events
            $.extend(that.events, {
                'click [data-history]' : function(event) {
                    history.back();
                    event.preventDefault();
                },
                'click [data-route]' : function(event) {
                    globals.router.navigate($(event.currentTarget).attr('data-route'), true);
                    event.preventDefault();
                }
            });

        },
    });

});
