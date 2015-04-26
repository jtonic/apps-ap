$(document).ready(function () {
    var model = new Backbone.Model({first_name: "Antonel", last_name: "Pazargic"});

    var ContactViewModel = kb.ViewModel.extend({
        constructor: function (model) {
            kb.ViewModel.prototype.constructor.call(this, model);
            this.full_name = ko.computed(function () {
                return this.first_name() + " " + this.last_name();
            }, this);

            this.register = function() {
                console.log('Clicked!!!');
            }
        }
    });

    var view_model = new ContactViewModel(model);
    kb.applyBindings(view_model, $('#databingind')[0]);
});
