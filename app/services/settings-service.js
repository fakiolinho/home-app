import Ember from 'ember';

export default Ember.Service.extend({
    update(data) {
        Ember.$.ajax({
                url: '/api/settings',
                method: 'put',
                contentType: 'application/json',
                cache: 'false',
                data: JSON.stringify(data)
            })
            .success(function(data) {
                console.log(data);
            })
            .error(function(err) {
                console.log(err);
            });
    }
});
