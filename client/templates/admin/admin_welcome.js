Template.adminWelcome.helpers({
  "title": function () {
    return Content.findOne({"name": "title", "location": "welcome"});
  }
});

Template.titleBox.events({
  "click .editable": function () {
    var id = this._id;
    console.log(id);
    $("#output-" + id).hide();
    $("#edit-box-" + id).show();
  },

  "submit form": function (e) {
    e.preventDefault();
    var id = this._id;
    Content.update({_id: id}, {$set: {"value": e.target[0].value}});
    $("#edit-box-" + id).hide();
    $("#output-" + id).show();
    return true;
  }
})