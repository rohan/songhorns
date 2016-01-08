
Meteor.startup(function (){
  if (Members.find().count() === 0) {
    console.log("Importing server/members.json to members_db");

    var data = JSON.parse(Assets.getText("members.json"));

    data.forEach(function (item, index, array) {
      Members.insert(item);
    })
  }
  if (Repertoire.find().count() === 0) {
    console.log("Importing server/repertoire.json to repertoire_db");

    var data = JSON.parse(Assets.getText("repertoire.json"));

    data.forEach(function (item, index, array) {
      Repertoire.insert(item);
    })
  }
})