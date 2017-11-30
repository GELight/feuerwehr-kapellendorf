import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {

  // Scroll to a specific position based on the route name (in px)
  resetScroll: 10,
  
  model() {

    return Ember.RSVP.hash({
      navigation: this.get('store').findAll('navigation').then((nav) => {
        return nav.filter((nav) => nav.get('type') === 'main');
      }),
      footerNavigation: this.get('store').findAll('navigation').then((nav) => {
        return nav.filter((nav) => nav.get('type') === 'footer');
      }),
      copyrightTo: new Date().getFullYear()
    });

  },

  actions: {

    linkTo(route) {
      this.transitionTo(route);
    }

  }

});
