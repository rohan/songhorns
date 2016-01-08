Content = new Mongo.Collection("content")

function adminUser(userId) {
  var adminUser = Meteor.users.findOne({username:"admin"});
  return (userId && adminUser && userId === adminUser._id);
}

Content.allow({
  "insert": function(userId, doc) {
    return adminUser(userId);
  },
  "update": function(userId, doc) {
    return adminUser(userId);
  },
  "remove": function(userId, doc) {
    return adminUser(userId);
  }
})

if (Meteor.isServer) {
  Meteor.publish("content", function () {
    return Content.find();
  });
}