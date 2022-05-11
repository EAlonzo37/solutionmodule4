

(function(window) {
	var speakWord = "Hola";
	var HolaSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.holaSpeaker = holaSpeaker;

})(window);