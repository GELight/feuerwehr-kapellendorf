import Ember from 'ember';

export default Ember.Route.extend({

  model() {

    return Ember.RSVP.hash({
      news: this.get('store').findAll('news'),
      navigation: this.get('store').findAll('navigation').then((nav) => {
        return nav.filter((nav) => nav.get('type') === 'main');
      }),
      lastNews: this.get('store').findAll('news')
    });

  }

});
