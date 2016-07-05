import Ember from 'ember';

export default Ember.Controller.extend({

    // Service to communicate with nodejs API
    settingsService: Ember.inject.service('settings-service'),

    // Computed Property based on lights setting
    // Useful to toggle DOM appearance
    isOn: Ember.computed('model.lights', function() {
        return !!this.get('model.lights');
    }),

    actions: {
        // Action handler to to toggle lights setting
        toggleLights() {
            let lights = !this.get('model.lights');

            this.set('model.lights', lights);
            this._changeLights(lights);
        }
    },

    // Private method to use service's update method
    // and inform nodejs server for any updates
    _changeLights(value) {
        this.get('settingsService').update({
            property: 'lights',
            value: value
        });
    }
});
