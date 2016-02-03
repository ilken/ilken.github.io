var Helper = (function() {
	var _getRandomLetters = function(array){
		var selectedLetters = [];
		var noOfLetters = 5;
		var letterCount = 0;
		var set = array.slice(0);

		while( letterCount < noOfLetters ){
			var randomIndex = Math.floor(Math.random() * set.length);
			selectedLetters[letterCount] = set[randomIndex];
			set.splice(randomIndex,1);
			letterCount++;
		}

		return selectedLetters;
	}

	return{
		getRandomLetters : _getRandomLetters
	}
})();