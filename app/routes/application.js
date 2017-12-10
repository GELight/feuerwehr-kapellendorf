import Ember from 'ember';

export default Ember.Route.extend({
  
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
