// note: no `var` here means this variable is available everywhere
Posts = new Meteor.Collection('posts');

// Posts.allow({
// 	insert: function(userId, doc) {
// 		return !! userId;
// 	}
// });

// QUESTION: i don't need lines 4-8 right? 
// QUESTION: before adding this server-side code, a baddie could 
// have defeated client-side checking by crafting a userId client-side??
Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user(),
		postWithSameLink = Posts.findOne({url: postAttributes.url});
		// ensure the user is logged in
		if (!user)
			throw new Meteor.Error(401, "You need to login to post new stories");
		// ensure the post has a title
		if (!postAttributes.title)
			throw new Meteor.Error(422, 'Please fill in a headline');
		// check that there are no previous posts with the same link
		if (postAttributes.url && postWithSameLink) {
			throw new Meteor.Error(302,
				'This link has already been posted',
				postWithSameLink._id);
		}

		// NOTE: injection-prevention type thing below
		// pick out the whitelisted keys
		var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});
		var postId = Posts.insert(post);
		return postId;
	}
});