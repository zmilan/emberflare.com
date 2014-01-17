EmberFlare.EntriesNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord("entry");
  },

  setupController: function(controller, model) {
    controller.set("model", model);
  },

  actions: {
    createEntry: function() {
      var self = this;
      var model = this.controllerFor("entriesNew").get("model");

      model.save().then(function() {
        self.transitionTo("entries.index");
      });
    }
  },

  deactivate: function() {
    var model = this.controllerFor("entriesNew").get("model");

    model.rollback();
  }
});
