Template.adminLogin.events({
  "submit form": function (e) {
    e.preventDefault();
    console.log("logged form submit event");
    console.log(e);
    var target = e.target;
    var username = target[0].value;
    var password = target[1].value;
    Meteor.loginWithPassword(username, password, function (err) {
      if (err) {
        console.log(err.reason);
        return false;
      }
    });

    return true;
  }
})