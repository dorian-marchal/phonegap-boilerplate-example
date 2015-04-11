define([
    'jquery',
    'underscore',
    'backbone',
    '__',
    'core/views/PageView',
    'text!app/templates/Home.html',
    'text!app/templates/MyModel.html',
    'app/models/MyModelCollection',
], function ($, _, Backbone, __, PageView, template, myModelTemplate, MyModelCollection) {
    'use strict';

    return PageView.extend({

        className: 'container',

        layoutOptions: {
            title: __.t('Home'),
        },

        initialize: function () {
            PageView.prototype.initialize.apply(this, arguments);
            var that = this;

            that.tpl = _.template(template);
            that.myModelsTpl = _.template(myModelTemplate);
            that.myModels = new MyModelCollection();

            that.myModels.on('invalid', function(model, error) {
                console.log(error);
            });
            that.myModels.on('add', that.renderMyModels, that);
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
                    console.log('Les données n\'ont pas pu être enregistrées. Le serveur REST est lancé ?');
                    console.log(model, res, error);
                }
            });

        },

        renderMyModels: function() {
            var that = this;

            var $myModelList = $('.mymodel-list ul');
            $myModelList.empty();

            that.myModels.each(function(myModel) {
                $myModelList.append(that.myModelsTpl(_.extend(myModel.toJSON(), {__: __})));
            });
        },

        render: function () {
            var that = this;

            that.myModels.fetch({
                silent: true,
                success: function(model, res, error) {
                    that.renderMyModels();
                },
                error: function(model, res, error) {
                    console.log('Les données n\'ont pas pu être récupérées. Le serveur REST est lancé ?');
                },
            });
            that.$el.html(that.tpl({
                __: __,
            }));
            return that;
        },

    });

});
