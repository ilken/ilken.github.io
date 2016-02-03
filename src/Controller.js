(function() {
    var qManager 	= new QueueManager(Settings.alphabet);
	qManager.shuffle();

    var publisher 	= new Publisher("Publisher", qManager);
    var subscribers = [];

    for (var i = 0; i < Settings.players; i++) {
        subscribers[i] = new Subscriber(i, "Subscriber " + i);
        subscribers[i].init();
    };
    
    var interval = setInterval(function(){
		publisher.publish();
    }, Settings.INTERVAL_SPEED);

    PubSub.subscribe(Settings.EMPTY_QUEUE, function(){
    	clearInterval(interval);
    });

    PubSub.subscribe(Settings.PUBLISH_WINNER, function(e, winner){
        clearInterval(interval);
		console.log("Winner: " + winner.data.name);
    });
})();