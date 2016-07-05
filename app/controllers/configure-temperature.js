import Ember from 'ember';

export default Ember.Controller.extend({

    // Service to communicate with nodejs API
    settingsService: Ember.inject.service('settings-service'),

    actions: {
        // Action handler to toggle temperature's setting
        changeTemperature(value) {
            this.set('model.temperature', value);
            this._changeTemperature(value);
        }
    },

    // Private method to use service's update method
    // and inform nodejs server for any updates
    _changeTemperature(value) {
        this.get('settingsService').update({
            property: 'temperature',
            value: value
        });
    }
});
