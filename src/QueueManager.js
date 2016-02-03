function QueueManager(data){
	this.data 				= data.slice(0);
	this.lastRemovedItem	= null;
}

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
QueueManager.prototype.shuffle =  function(){
	var array = this.data;
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	this.data = array;
}

QueueManager.prototype.getNext =  function(){
	if (this.data.length > 0) {
		this.lastRemovedItem = this.data[0];
	    this.data.splice(0, 1);

	    return this.lastRemovedItem;
	}
	else{
		PubSub.publish(Settings.EMPTY_QUEUE);
	}
}