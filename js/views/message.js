var MessageView = Marionette.View.extend({
	template: '#messageView',
	ui: {
		text: '#messageText',
		edit: '.messageEdit',
		color: '.messageColor',
		delete: '.messageDelete',
		selecting: '#select'
	}, 
	events: {
		'click @ui.edit': function() {
			var l = new Messages();
			if(confirm("Would you like to edit the message?")){
				var newMessageText = prompt('Edit it!', this.ui.text.text());
				for(var i = 0; i < m.length; i++){
					if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
						if(m.models[i].get('text') === this.ui.text.text()){
							var res = newMessageText.concat(" (edited)");
							m.models[i].set('text', res);
							$('label').remove('#messageAuthor');
							$('label').remove('#messageText');
							$('label').remove('#messageDate');

						}
					}
				} 
				for(var i = 0; i < m.length; i++){
					if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
						l.add(m.models[i]);
					}
				}
				new MessagesView({
					el: '#chat',
					collection: l
				}).render();
			}
		},
		'click @ui.color': function(){
			var l = new Messages();
			if(confirm("Do you want to change the message color?")){
				var newMessageColor = prompt('Enter color in words or hexadecimal value', 'black or #FFF000');
				for(var i = 0; i < m.length; i++){
					if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
						if(m.models[i].get('text') === this.ui.text.text()){
							m.models[i].set('color', newMessageColor);
							this.ui.text.css("color", newMessageColor);
						}
					}
				} 
			}
			new MessagesView({
				el: '#chat',
				collection: l
			}).render();
		},

		'click @ui.delete': function(){
			var l = new Messages();
			if(confirm("Are you sure you want to delete the message?")){
				for(var i = 0; i < m.length; i++){
					if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
						if(m.models[i].get('text') === this.ui.text.text()){
							m.models[i].set('text', '(message was deleted)');
							$('label').remove('#messageAuthor');
							$('label').remove('#messageText');
							$('label').remove('#messageDate');
							$('img').remove('.messageEdit');
							$('img').remove('.messageColor');
							$('img').remove('#select');

						}
					}
				} 
				for(var i = 0; i < m.length; i++){
					if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
						l.add(m.models[i]);
					}
				}
				new MessagesView({
					el: '#chat',
					collection: l
				}).render();  
			} 
		},

		'click @ui.selecting': function(){
			if(confirm('Would you like to select messages for DELETING them?')){


				var l = new Messages();
				var values = prompt('Please, write up numbers of messages you want to delete?', '123');
				var array = [];
				for(var i=0; i<values.length; i++){
					array.push(values[i] - 1);
				}


				for(var i = 0; i < m.length; i++){
					if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
						if(m.models[i].get('text') === this.ui.text.text()){
							$('label').remove('#messageAuthor');
							$('label').remove('#messageText');
							$('label').remove('#messageDate');
							$('img').remove('.messageEdit');
							$('img').remove('.messageColor');
							$('img').remove('#select');
						}
					}
				}

				for(var i=0; i < array.length; i++){
					m.models[array[i]].set('text', 'This message was deleted');
				}


				for(var i = 0; i < m.length; i++){
					if ((m.models[i].get('author') === $("#userName").text() && m.models[i].get('receiver') === $(".single.active").text()) || (m.models[i].get('author') === $(".single.active").text() && m.models[i].get('receiver') === $("#userName").text())) {
						l.add(m.models[i]);
					}
				}

				new MessagesView({
					el: '#chat',
					collection: l
				}).render();  
			} else {
				if(confirm('Would you like to select messages for COLORING them?')){
					var l = new Messages();
					var values = prompt('Please, write up numbers of messages you want to delete?', '123');
					var array = [];
					for(var i=0; i<values.length; i++){
						array.push(values[i] - 1);
					}

					var newMessageColor = prompt('Enter your color');
					for(var i = 0; i < array.length; i++){
						m.models[array[i]].set('color', newMessageColor);
						this.ui.text.css("color", newMessageColor);
					} 
					
					new MessagesView({
						el: '#chat',
						collection: l
					}).render();

				}
			}    
		},
	}
});

var MessagesView = Marionette.CollectionView.extend({
	tagName: 'div',
	childView: MessageView
});
