Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    Meteor.subscribe('temperature');    
    Meteor.subscribe('moisture');
    Meteor.subscribe('light');
    return Meteor.subscribe('enviroment'); }
});

Router.route('/', {name: 'postsList'});
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
