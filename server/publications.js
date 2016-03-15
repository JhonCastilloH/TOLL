Meteor.publish('enviroment', function() {
  return Enviroment.find();
});

Meteor.publish('light', function() {
  return Light.find();
});

Meteor.publish('moisture', function() {
  return Moisture.find();
});

Meteor.publish('temperature', function() {
  return Temperature.find();
});