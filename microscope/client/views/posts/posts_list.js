/* 
This is the best way to make front-end talk to backend. nice and simple. but if this template were to talk to a 3rd party library (like GMaps) then you'd have to wire up an observe() call, and provide methods added(), removed(), changed().

The code below is a demonstration of Meteor's "reactivity".
*/
Template.postsList.helpers({
	posts: function() {
		return Posts.find({}, {sort: {submitted: -1}});
	}
});