import DS from 'ember-data';

export default DS.Model.extend({
    "ico": DS.attr('string'),
    "title": DS.attr('string'),
    "description": DS.attr('string'),
    "link": DS.attr('string'),
    "active": DS.attr('boolean'),
    "type": DS.attr('string')
});
