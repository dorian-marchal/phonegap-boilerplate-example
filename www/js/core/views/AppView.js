/**
 * A base view.
 * All the app views must inherit from this.
 * The general code of the views goes here.
 */
 define([
    'jquery',
    'underscore',
    'backbone',
    'app/singletons/router'
], function ($, _, Backbone, router) {
    'use strict';

    return Backbone.View.extend({

        /**
         * Bind a subview to an element via a selector.
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
                'click [data-back]' : function() {
                    history.back();
                },
                'click [data-route]' : function(event) {
                    router.navigate($(event.target).attr('data-route'), true);
                }
            });

        },

    });

});
