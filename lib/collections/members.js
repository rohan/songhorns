Members = new Mongo.Collection("members");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("members", function () {
    return Members.find();
  });
}