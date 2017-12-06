import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('association');
  this.route('operation', function() {
    this.route('members');
    this.route('technology');
    this.route('history');
  });
  this.route('imprint');
  this.route('disclaimer');
  this.route('dataprotection');
  this.route('fireequipment');
  this.route('statute');
  this.route('youth');
  this.route('honor');
});

export default Router;
