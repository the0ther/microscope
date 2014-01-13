Template.postItem.helpers({
	// SEE: post_item.html for where this helper func is used
	ownPost: function() {
		return this.userId == Meteor.userId();
	},
	domain: function() {
		var a = document.createElement('a');
		// notice that *this* is setup by the {{#each}} loop
		a.href = this.url;
		return a.hostname;
	}
});