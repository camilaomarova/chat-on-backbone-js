var ContactView = Marionette.View.extend({
	template: '#contactView',
	ui: {
		div: '.friend',
		contact: '.single',
		delete: '#trash'
	},
	events: {
		'click @ui.contact': function(){
			items = document.querySelectorAll('.single.active');
			if (items.length) {
				items[0].className = 'single';
			}
			this.ui.contact.addClass('active');

			$('label').remove('#messageAuthor');
			$('label').remove('#messageText');
			$('label').remove('#messageDate');

			var k = new Messages();

			for(var i = 0; i < m.length; i++){
				if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === this.ui.contact.text()) || (m.models[i].get('author') === this.ui.contact.text() && m.models[i].get('receiver') === $("#userName").text())) {
					if(m.models[i].get('deleted') !== 'yes') {
						k.add(m.models[i]);   	
					}
				}
			}  
			new MessagesView({
				el: '#chat',
				collection: k
			}).render();	
		},
		'click @ui.delete': function(){
			if(confirm("Are you sure you want to delete this user from your list?")) {
				this.ui.div.addClass('deleted');
				$('div').remove('.friend.deleted');
				$('label').remove('#messageAuthor');
				$('label').remove('#messageText');
				$('label').remove('#messageDate');
			}
		}
	}
});

var ContactsView = Marionette.CollectionView.extend({
	tagName: 'div',
	childView: ContactView

});
