function Subscriber(id, name){
	this.id 	= id;
	this.name 	= name;
	this.word	= null;
}

Subscriber.prototype.init = function(){
	this.word = Helper.getRandomLetters(Settings.alphabet);
	PubSub.subscribe(Settings.PUBLISH_ITEM, this.processItem.bind(this));
}

Subscriber.prototype.processItem = function(event, data) {
	for( var i = 0; i < this.word.length; i++ ){
		if( this.word[i] === data.item ){
			this.word.splice(i, 1);

			console.log(this.name + ": " + data.item);
		}
	}

	if(this.word.length === 0){
		PubSub.publish(Settings.PUBLISH_WINNER, {data: this});
	}
};