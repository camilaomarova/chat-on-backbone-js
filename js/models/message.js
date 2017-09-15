var MessageModel = Backbone.Model.extend({
	defaults: {
		author: "", 
		text: "",
		receiver: "",
		date: "",
		deleted: "",
		color: ""
	}
});