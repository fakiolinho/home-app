import Ember from 'ember';

export default Ember.Controller.extend({
    settingsService: Ember.inject.service('settings-service'),

    actions: {
        changeTemperature(value) {
            this.set('model.temperature', value);
            this._changeTemperature(value);
        }
    },

    _changeTemperature(value) {
        this.get('settingsService').update({
            property: 'temperature',
            value: value
        });
    }
});
