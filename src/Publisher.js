function Publisher(name, queueManager){
	this.name 		= name;
	this.qManager	= queueManager;
}

Publisher.prototype.publish =  function(){
	var nextItem = this.qManager.getNext();
	console.log("Publishing: " + nextItem);
	PubSub.publish(Settings.PUBLISH_ITEM, {item: nextItem});
}