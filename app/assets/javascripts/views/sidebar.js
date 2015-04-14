var Sidebar = Backbone.View.extend({
	el: '#sidebar-items',
	sidebarPreviewTpl: _.template($('#sidebar-message-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click .sidebar-item' : 'chatbox'
	},
	render: function() {
		var messages = this.model.attributes.messages;
		var x = messages.length - 1;
		var lastMessage = messages[x];
		this.$el.append(this.sidebarPreviewTpl(lastMessage));
		return this;
	},
	chatbox: function(e) {
		console.log(this.model);
		var view = new Chatbox({model: this.model});
		return this;
	}
});