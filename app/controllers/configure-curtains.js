import Ember from 'ember';

export default Ember.Controller.extend({
    /*
    * Service to communicate with nodejs API
    */
    settingsService: Ember.inject.service('settings-service'),

    /*
    * Computed Property based on curtains setting
    * Useful to toggle DOM appearance
    */
    isOpen: Ember.computed('model.curtains', function() {
        return !!this.get('model.curtains');
    }),

    actions: {
        /*
        * Action handler to toggle curtains setting
        */
        toggleCurtains() {
            let curtains = !this.get('model.curtains');

            this.set('model.curtains', curtains);
            this._storeCurtains(curtains);
        }
    },

    /*
    * Private method to use service's update method
    * and inform nodejs server for any updates
    */
    _storeCurtains(value) {
        this.get('settingsService').update({
            property: 'curtains',
            value: value
        });
    }
});
