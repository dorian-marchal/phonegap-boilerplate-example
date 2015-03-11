define([
    'core/models/AppModel',
    'jquery',
], function(AppModel, $) {
    'use strict';

    var MyModel = AppModel.extend({
        route: '/mymodels',

        validate: function(attributes) {

            if (attributes.attribute === '' || attributes.attribute2 === '') {
                return 'Attributes must be set!';
            }
            else if (!$.isNumeric(attributes.attribute2)) {
                return 'attribute2 must be numeric!';
            }
        },
    });

    return MyModel;
});
