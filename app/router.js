import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('association');
  this.route('operation', function() {});
  this.route('statute');

  this.route('imprint');
  this.route('disclaimer');
  this.route('dataprotection');
  this.route('fireequipment');
  this.route('members');
});

export default Router;
