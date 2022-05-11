
(function(window) {
	var speakWord = "hola";
	var holaSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.holaSpeaker = holaSpeaker;

})(window);