import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    return Ember.RSVP.hash({
      news: this.get('store').findAll('news'),
      navigation: this.get('store').findAll('navigation').then((nav) => {
        return nav.filter((nav) => (nav.get('type') === 'main' && nav.get('link') !== 'index') );
      }),
      lastNews: this.get('store').findAll('news'),
      welcomes: this.get('store').findAll('welcome')
    });

  }

});
