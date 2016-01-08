Repertoire = new Mongo.Collection("repertoire");

if (Meteor.isServer) {
  Meteor.publish("repertoire", function () {
    return Repertoire.find();
  })
}