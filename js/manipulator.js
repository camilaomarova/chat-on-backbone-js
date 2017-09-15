var memory = {
	get: function(key){
		return JSON.parse(localStorage.getItem(key));
	},

	set: function(key, val){
		var tmp = JSON.stringify(val);
		localStorage.setItem(key, tmp);
	},

	remove: function(key){
		localStorage.removeItem(key);
	},

	clear: function(){
		localStorage.clear();
	}
};

var userManager = {
	addNewUser: function(userModel){
		usersCollection = userManager.getUsersCollection();
		usersCollection.push(userModel);
		userManager.setUsersCollection(usersCollection);
	},

	changeUserModel: function(userModel){
		usersCollection = userManager.getUsersCollection();
		for (var i = 0; i < usersCollection.length; i++){
			if(usersCollection[i].name === userModel.get('name')){
				usersCollection[i].status = userModel.get('status');
				break;
			}
		}

		userManager.setUsersCollection(usersCollection);

	}, 

	setUsersCollection: function(list){
		memory.set('users', list);
	},

	getUsersCollection: function(){
		return memory.get('users') || [];
	}
};

var messageManager = {
	  addNewMessage: function(messageModel){
	    messagesCollection = messageManager.getMessagesCollection();
	    messagesCollection.push(messageModel);
	    messageManager.setMessagesCollection(messagesCollection);
	  },

	  setMessagesCollection: function(list){
	    memory.set('messages', list);
	  },

	  getMessagesCollection: function(){
	    return memory.get('messages') || [];
	  }
};