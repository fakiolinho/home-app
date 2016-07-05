import Ember from 'ember';

export default Ember.Controller.extend({
    settingsService: Ember.inject.service('settings-service'),

    isOpen: Ember.computed('model.curtains', function() {
        return !!this.get('model.curtains');
    }),

    actions: {
        toggleCurtains() {
            let curtains = !this.get('model.curtains');

            this.set('model.curtains', curtains);
            this._changeCurtains(curtains);
        }
    },

    _changeCurtains(value) {
        this.get('settingsService').update({
            property: 'curtains',
            value: value
        });
    }
});
