import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('configure-lights');
  this.route('configure-temperature');
  this.route('configure-curtains');
  this.route('error', { path: '/*wildcard' });
});

export default Router;
