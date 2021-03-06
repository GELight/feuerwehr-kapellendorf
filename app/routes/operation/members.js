import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      operationalMembers: this.get('store').findAll('member').then((members) => {
        return members.filter(function(member/*, index, array*/) {
          if (member.get('operationsDepartment.member')) {
            return true;
          }
          return false;
        }).sortBy('firstName');
      }),
      operationalMembersCount: this.get('store').findAll('member').then((members) => {
        let list = members.filter(function(member/*, index, array*/) {
          if (member.get('operationsDepartment.member')) {
            return true;
          }
          return false;
        });
        return list.get('length');
      }),
      commiteeMembers: this.get('store').findAll('member').then((members) => {
        let list = Ember.A();

        let fireChiefList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "fireChief") {
                fireChiefList.push({
                  member: member,
                  job: "fireChief"
                });
              }
            });
          }
        });
        list.push(fireChiefList);

        let deputyFireChiefList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "deputyFireChief") {
                deputyFireChiefList.push({
                  member: member,
                  job: "deputyFireChief"
                });
              }
            });
          }
        });
        list.push(deputyFireChiefList);

        let youthOfficerList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "youthOfficer") {
                youthOfficerList.push({
                  member: member,
                  job: "youthOfficer"
                });
              }
            });
          }
        });
        list.push(youthOfficerList);

        let childrenOfficerList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "childrenOfficer") {
                childrenOfficerList.push({
                  member: member,
                  job: "childrenOfficer"
                });
              }
            });
          }
        });
        list.push(childrenOfficerList);

        let equipmentOfficerList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "equipmentOfficer") {
                equipmentOfficerList.push({
                  member: member,
                  job: "equipmentOfficer"
                });
              }
            });
          }
        });
        list.push(equipmentOfficerList);

        let assessorList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "assessor") {
                assessorList.push({
                  member: member,
                  job: "assessor"
                });
              }
            });
          }
        });
        list.push(assessorList);

        let representativeHonorDepartmentList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "representativeHonorDepartment") {
                representativeHonorDepartmentList.push({
                  member: member,
                  job: "representativeHonorDepartment"
                });
              }
            });
          }
        });
        list.push(representativeHonorDepartmentList);

        let safetyOfficerList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "safetyOfficer") {
                safetyOfficerList.push({
                  member: member,
                  job: "safetyOfficer"
                });
              }
            });
          }
        });
        list.push(safetyOfficerList);

        let responsiblePublicRelationsList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "responsiblePublicRelations") {
                responsiblePublicRelationsList.push({
                  member: member,
                  job: "responsiblePublicRelations"
                });
              }
            });
          }
        });
        list.push(responsiblePublicRelationsList);

        let responsibleAssociationWorkList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "responsibleAssociationWork") {
                responsibleAssociationWorkList.push({
                  member: member,
                  job: "responsibleAssociationWork"
                });
              }
            });
          }
        });
        list.push(responsibleAssociationWorkList);

        let responsiblePublicTechnologyList = Ember.A();
        members.forEach((member) => {
          if (member.get('operationsDepartment.militaryCommittee')) {
            member.get('operationsDepartment.militaryCommittee').forEach((jobs) => {
              if (jobs.job === "responsiblePublicTechnology") {
                responsiblePublicTechnologyList.push({
                  member: member,
                  job: "responsiblePublicTechnology"
                });
              }
            });
          }
        });
        list.push(responsiblePublicTechnologyList);

        return list;
      })
    });

  }

});
