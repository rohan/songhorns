Router.configure({
  layoutTemplate: "standardLayout",
  waitOn: function () {
    Meteor.subscribe("members");
    Meteor.subscribe("repertoire");
    Meteor.subscribe("content");
  }
});

Router.route("home", {
  path: '/',
  yieldTemplates: {
    'welcome': {to: 'welcome'},
    'about': {to: 'about'},
    'memberList': {to: 'members', 'data': {'members': Members.find({alum: false}, {sort: {order: 1}})}},
    'videos': {to: 'videos'},
  }
});

Router.route("rep", {
  path: '/repertoire.html',
  layoutTemplate: "blankLayout",
  yieldTemplates: {
    'repertoireList': {to : 'content', 'data': {'songs': Repertoire.find({}, {sort: {order: 1}})}},
  }
});

Router.route("readme", {
  path: '/aboutthiswebsite.html',
  layoutTemplate: "blankLayout",
  yieldTemplates: {
    'readme': {to: 'content'},
  }
});

Router.route("admin", {
  path: '/admin',
  layoutTemplate: "adminLayout",
  yieldTemplates: {
    'admin_welcome': {to: 'welcome'},
    'about': {to: 'about'},
    'memberList': {to: 'members', 'data': {'members': Members.find({alum: false}, {sort: {order: 1}})}},
    'videos': {to: 'videos'},
  }
})

var scrollToTop = function () {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  this.next();
}

Router.onBeforeAction(scrollToTop);