
(function(window) {
	var speakWord = "adios";
	var adiosSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.adiosSpeaker = adiosSpeaker;

})(window);