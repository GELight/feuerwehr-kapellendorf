import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return Ember.RSVP.hash({
            operations: this.get('store').findAll('operation')
        });
    }
    
});
