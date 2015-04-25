/**
 * Helper to slide a new page in the app.
 * Use : https://github.com/ccoenraets/directory-backbone-topcoat-require
 */
define([
    'globals',
    'jquery',
], function (globals, $) {

    'use strict';

    return function PageSlider(container) {

        var animationsEnabled = true;

        var $currentPage,
            stateHistory = [];

        this.setAnimationsEnabled = function(enableAnimation) {
            animationsEnabled = enableAnimation;
        };

        this.back = function () {
            globals.router.navigate(stateHistory[stateHistory.length - 2], true);
        };

        // Use this function if you want PageSlider to automatically determine
        // the sliding direction based on the state history.
        // onTransitionEndCallback function is called when the transition ends
        this.slidePage = function ($newPage, onTransitionEndCallback) {

            var l = stateHistory.length,
                state = window.location.hash;

            if (l === 0) {
                stateHistory.push(state);
                this.slidePageFrom($newPage, null, onTransitionEndCallback);
                return;
            }
            if (state === stateHistory[l - 2]) {
                stateHistory.pop();
                this.slidePageFrom($newPage, 'left', onTransitionEndCallback);
            } else {
                stateHistory.push(state);
                this.slidePageFrom($newPage, 'right', onTransitionEndCallback);
            }

        };

        /**
         * Use this function directly if you want to control the sliding direction outside PageSlider
         * @param  {$} $newPage The new page to slide in
         * @param  {String} from Origin of the slide ('page-left', 'page-right', or null)
         * @param  {function} onTransitionEndCallback Called when the slide end
         *                    or immediately if there is no transition.
         *                    A boolean is passed to the callback : true if we just slide
         *                    in the very first page.
         *
         */
        this.slidePageFrom = function ($newPage, from, onTransitionEndCallback) {

            onTransitionEndCallback = onTransitionEndCallback || $.noop;

            // Current page must be removed after the transition
            var $oldPage = $currentPage;
            var firstSlide = !$oldPage;
            var to = (from === 'left' ? 'right' : 'left');

            container.append($newPage.addClass('page'));

            // First loaded page (no old page) or no transition
            if (firstSlide || !from || !animationsEnabled) {
                // Remove old page if it exists
                if ($oldPage) {
                    $oldPage.remove();
                }

                $newPage.addClass('page-center');

                $currentPage = $newPage;

                // We call the transition end callback anyway
                onTransitionEndCallback(firstSlide);
                return;
            }

            // Position the page at the starting position of the animation
            $newPage.addClass('page-' + from);

            // Shim transitionend if it's not fired
            var shimTransitionEnd = setTimeout(function() {
                onTransitionEnd();
            }, 600);

            $currentPage.one('transitionend webkitTransitionEnd', function () {
                onTransitionEnd();
            });

            // Force reflow. More information here: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
            /*jshint -W030*/
            container[0].offsetWidth;

            // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
            $newPage
                .removeClass('page-left page-right')
                .addClass('page-center from-' + from);

            $oldPage
                .removeClass('page-center')
                .addClass('page-' + to + ' to-' + to);

            $currentPage = $newPage;

            var onTransitionEnd = function () {
                $(container).find('> .page:not(:last)').remove();
                $currentPage
                    .removeClass('transition')
                    .addClass('no-transition');

                // Force reflow.
                container[0].offsetWidth;

                clearTimeout(shimTransitionEnd);
                onTransitionEndCallback(false);
            };
        };

    };

});
