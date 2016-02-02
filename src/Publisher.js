function Publisher(name, queueManager){
	this.name 		= name;
	this.qManager	= queueManager;
}

Publisher.prototype.publish =  function(){
	PubSub.publish(Settings.PUBLISH_ITEM, {item:this.qManager.getNext()});
}