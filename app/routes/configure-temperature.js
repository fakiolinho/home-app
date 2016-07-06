import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        /*
        * Resolve settings data from API endpoint '/api/settings'
        */
        return {
            temperature: Ember.$.getJSON('/api/settings')
                .then(function(data) {
                    return data.settings.temperature;
                })
        };
    }
});
