Meteor.publish('meds', function() {
  return Meds.find();
});