Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('meds'); }
});

Router.route('/', {name: 'medList'});