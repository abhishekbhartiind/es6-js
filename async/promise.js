window.onload = function() {

	$.get("data/zen.json").then(function(zen){
		console.log(zen);
		return $.get("data/abhi.json")
	}).then(function(abhi){
		console.log(abhi);
		return $.get("data/tweets.json")
	}).then(function(tweets){
		console.log(tweets);
	});

	/*
	function get(url){
		return new Promise(function(resolve, reject){
			var xhttp = new XMLHttpRequest();
			xhttp.open("GET", url, true);
			xhttp.onload = function(){
				if(xhttp.status == 200){
					resolve(JSON.parse(xhttp.response));
				}else{
					reject(xhttp.statusText);
				}
			};
			xhttp.onerror = function(){
				reject(xhttp.statusText);
			}
			xhttp.send();
		});
	}

	var promise = get("data/zen.json");
	promise.then(function(zen){
		console.log(zen);
		return get("data/abhi.json");
	}).then(function(abhi){
		console.log(abhi);
		return get("data/tweets.json");
	}).then(function(tweets){
		console.log(tweets);
	}).catch(function(error){
		console.log(error);
	});

	*/
}