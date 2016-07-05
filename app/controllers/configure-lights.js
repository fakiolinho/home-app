import Ember from 'ember';

export default Ember.Controller.extend({
    settingsService: Ember.inject.service('settings-service'),

    isOn: Ember.computed('model.lights', function() {
        return !!this.get('model.lights');
    }),

    actions: {
        toggleLights() {
            let lights = !this.get('model.lights');

            this.set('model.lights', lights);
            this._changeLights(lights);
        }
    },

    _changeLights(value) {
        this.get('settingsService').update({
            property: 'lights',
            value: value
        });
    }
});
