$(document).ready(function () {

    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        options.crossDomain ={
            crossDomain: true
        };
        options.xhrFields = {
            withCredentials: true
        };
    });

    var Entity = Backbone.Model.extend({
        url: function () {
            return 'http://localhost:4000/users';
        },
        defaults: {
            "first_name": "n/a",
            "last_name": "n/a"
        }
    });

    var entity = new Entity();

    var ContactViewModel = kb.ViewModel.extend({
        constructor: function (model) {
            kb.ViewModel.prototype.constructor.call(this, model);
            this.full_name = ko.computed(function () {
                return this.first_name() + " " + this.last_name();
            }, this);
            this.register = function() {
                entity.fetch(
                    {
                        success: function () {
                            console.log('Success!!!');
                            console.log(JSON.stringify(entity));
                        },
                        error: function () {
                            console.log('An error has occurred!!!');
                        }
                    });
                console.log(JSON.stringify(entity));
            };
            this.info = function() {
                entity.save(
                    {
                        success: function () {
                            console.log('Successfully saved!!!');
                        },
                        error: function () {
                            console.log('An error has occurred while saving!!!');
                        }
                    });
                console.log(entity)
            };
        }
    });

    var view_model = new ContactViewModel(entity);
    kb.applyBindings(view_model, $('#databingind')[0]);

});
