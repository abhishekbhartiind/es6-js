
window.onload = function() {
	
	// AJAX REQUEST/ RESPONSE
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200){
			//console.log(JSON.parse(http.response))
		}
	}

	http.open("GET","data/tweets.json", true);
	http.send();
	//console.log(http);

	/*
		jQuery 
	*/
	$.get("data/tweets.json", function(data){
		console.log(data);
	});

};


/* READY STATE

0 - Request not initialized
1 - Request has been set up
2 - Request has been sent
3 - Request is in process
4 - Request is complete

*/