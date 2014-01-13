Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.map(function() {
	this.route('postsList', {path: '/'});

	this.route('postPage', {
		path: '/posts/:_id',
		// below sets up the "Data Context" for the postPage template
		data: function() { return Posts.findOne(this.params._id); }
	});

	this.route('postSubmit', {
		path: '/submit'
	});
});