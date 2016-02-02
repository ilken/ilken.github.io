function Subscriber(id, name){
	this.id 	= id;
	this.name 	= name;
}

Subscriber.prototype.init = function(){
	PubSub.subscribe(Settings.PUBLISH_ITEM, this.processItem.bind(this));
}

Subscriber.prototype.processItem = function(event, data) {
	console.log(this.name + ": " + data.item);
};