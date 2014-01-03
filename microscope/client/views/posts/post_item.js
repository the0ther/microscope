Template.postItem.helpers({
	domain: function() {
		var a = document.createElement('a');
		// notice that *this* is setup by the {{#each}} loop
		a.href = this.url;
		return a.hostname;
	}
});