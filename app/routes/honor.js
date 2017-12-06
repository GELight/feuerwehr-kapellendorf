import Ember from 'ember';

export default Ember.Route.extend({

    store: Ember.inject.service(),

    model() {
        return Ember.RSVP.hash({
            members: this.get('store').findAll('member').then((members) => {
                return members.filter(function(member) {
                    if (member.get('honor')) {
                        return true;
                    }
                    return false;
                });
            })
        });
    }

});
