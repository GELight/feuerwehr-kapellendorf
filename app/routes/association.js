import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      members: this.get('store').findAll('member').then((members) => {
        let list = Ember.A();
        
        members.forEach((member) => {
          if (member.get('board') && member.get('boardChairman')) {
            member.set('type', 'boardChairman');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('deputyBoardChairman')) {
            member.set('type', 'deputyBoardChairman');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('treasurer')) {
            member.set('type', 'treasurer');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('secretary')) {
            member.set('type', 'secretary');
            list.push(member);
          }
        });
        members.forEach((member) => {
          if (member.get('board') && member.get('assessor')) {
            member.set('type', 'assessor');
            list.push(member);
          }
        });

        return list;
      }),
      membership: this.get('store').findAll('member').then((members) => {
        let count = members.get("length");
        if (count > 41) {
          return 41;
        }
        
        return count;
      })
    });
  }
  
});
