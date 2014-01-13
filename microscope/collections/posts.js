// note: no `var` here means this variable is available everywhere
Posts = new Meteor.Collection('posts');

Posts.allow({
	insert: function(userId, doc) {
		return !! userId;
	}
})