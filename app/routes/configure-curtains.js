import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            curtains: Ember.$.getJSON('/api/settings')
                .then(function(data) {
                    return data.settings.curtains;
                })
        });
    }
});
