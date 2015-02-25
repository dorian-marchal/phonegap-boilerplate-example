define([
    'jquery',
    'underscore',
    'backbone',
    'core/views/PageView',
    'text!app/templates/Home.html',
    'text!app/templates/MyModel.html',
    'app/models/mymodels',
], function ($, _, Backbone, PageView, template, myModelTemplate, MyModels) {
    'use strict';

    return PageView.extend({

        className: 'container',

        layoutOptions: {
            title: 'Home',
        },

        initialize: function () {
            PageView.prototype.initialize.apply(this, arguments);
            var that = this;

            that.template = _.template(template);
            that.myModelsTemplate = _.template(myModelTemplate);
            that.myModels = new MyModels();

            that.myModels.on('invalid', function(model, error) {
                alert(error);
            });
            that.myModels.on('change', that.renderMyModels, that);
        },

        events: {
            'submit .mymodel-form' : 'postMyModel',
        },

        postMyModel: function(event) {
            event.preventDefault();
            var that = this;

            that.myModels.create({
                attribute: $('[name="attribute"]').val(),
                attribute2: $('[name="attribute2"]').val(),
            }, {
                wait: true,
                validate: true,
                error: function(model, res, error) {
                    alert('Les données n\'ont pas pu être enregistrées. Le serveur REST est lancé ?');
                    console.log(model, res, error);
                }
            });

        },

        renderMyModels: function() {
            var that = this;

            var $myModelList = $('.mymodel-list ul');
            $myModelList.empty();

            that.myModels.each(function(myModel) {
                $myModelList.append(that.myModelsTemplate(myModel.toJSON()));
            });
        },

        render: function () {
            var that = this;

            that.myModels.fetch({
                success: function(model, res, error) {
                    that.renderMyModels();
                },
                error: function(model, res, error) {
                    alert('Les données n\'ont pas pu être récupérées. Le serveur REST est lancé ?');
                }
            });
            that.$el.html(that.template());
            return that;
        },

    });

});
