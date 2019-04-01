window.onload = function() {

	function handleError(jqXHR, textStatus, error){
		console.log(error);
	}

	//fetching data from zen, tweets and abhi- 3 ajax rejects
	$.ajax({
		type: "GET",
		url : "data/zen.json",
		success: cbAbhi ,
		error: handleError
	});

	function cbAbhi(data) {
		console.log(data);
		$.ajax({
			type: "GET",
			url : "data/abhi.json",
			success: cbTweets,
			error:handleError
		});
	}

	function cbTweets(data){
		console.log(data);
		$.ajax({
			type: "GET",
			url : "data/tweets.json",
			success: function(data){
				console.log(data);
			} ,
			error: handleError
		});
	} 
	// // ---asynchronous func -----
	// $.get("data/tweets.json", callback);
	// function callback(data){
	// 	console.log(data);
	// }

	// ---- synchronous func -----
	// function callback(value){
	// 	console.log(value)
	// }
	// var fruits = ["apple","mango","orange","stawberry"];
	// fruits.forEach(callback);
	// console.log("Done")
};