define([
    'core/models/AppCollection',
    'app/models/MyModel'
], function(AppCollection, MyModel) {
    'use strict';

    var MyModels = AppCollection.extend({
        route: '/mymodels',
        model: MyModel,
    });

    return MyModels;
});
