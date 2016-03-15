Template.postsList.helpers({
  posts: function() {
  	console.log(Posts.find().fetch());
    return Posts.find();
  }
});