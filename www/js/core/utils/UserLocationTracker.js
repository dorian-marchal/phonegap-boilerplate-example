/**
 * Helps to add a marker that follow the user on a map.
 * This helper trigger an 'firstPositioning' event when the first location is found
 * after tracking start with two parameters : the map and the new position
 */
define([
    'backbone',
    'underscore',
    'gmaps',
    'app/singletons/geolocation',
], function (Backbone, _, GMaps, geolocation) {
    'use strict';

    var UserLocationTracker = function () {};

    _.extend(UserLocationTracker.prototype, Backbone.Events, {

        constructor: UserLocationTracker,
        map: null,
        marker: null,
        markerOptions: { lat: 0, lng: 0 },
        // When true, the map is centered on the user on first positioning
        centerOnFirstPositioning: false,

        setMap: function (map) {

            if (!map) {
                console.error('this.map is undefined');
                return;
            }

            this.map = map;

            if (this.marker) {
                this.marker.setMap(map.map);
            }
            else {
                this._createMarker();
            }
        },

        setMarkerIconOptions: function (iconOptions) {
            _.extend(this.markerOptions, {
                icon: iconOptions
            });
        },

        /**
         * Start showing the user position on the map.
         */
        start: function () {

            if (!this.marker) {
                console.error('this.marker is undefined');
                return;
            }

            if (!this.map) {
                console.error('this.map is undefined');
                return;
            }

            this.listenTo(geolocation, 'trackingStop', function () {
                this.marker.setVisible(false);
            }.bind(true));

            this.listenTo(geolocation, 'locationSuccess', function (position) {

                var firstPositioning = false;

                // If the marker is not visible, we show it. This is done on
                // locationSuccess event to avoid showing a marker on a wrong position
                if (!this.marker.getVisible()) {
                    firstPositioning = true;
                    this.marker.setVisible(true);

                    // The first time the marker is shown, the map is centered on it
                    if (this.centerOnFirstPositioning) {
                        this.map.setCenter(position.coords.latitude, position.coords.longitude);
                    }
                }

                this._updateMarkerPosition(position.coords.latitude, position.coords.longitude);

                if (firstPositioning) {
                    this.trigger('firstPositioning', this.map, position);
                }
            }.bind(this));
        },

        /**
         * Stop showing the user position.
         * Be careful, this does not stop tracking the geolocation.
         */
        stop: function () {
            if (this.marker) {
                this.marker.setVisible(false);
            }
            this.stopListening(geolocation);
        },

        /**
         * Create a hidden marker on the map
         */
        _createMarker: function () {

            if (!this.map) {
                console.error('this.map is undefined');
                return;
            }

            this.marker = this.map.addMarker(this.markerOptions);
            this.marker.setVisible(false);
        },

        /**
         * Update the user position on the map
         */
        _updateMarkerPosition: function (latitude, longitude) {
            this.marker.setPosition({
                lat: latitude,
                lng: longitude,
            });
        },

    });

    return UserLocationTracker;
});
