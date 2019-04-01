window.onload = function() {

	wrapGen(function* (){
		var abhi = yield $.get("data/abhi.json");
		console.log(abhi);
		var tweets = yield $.get("data/tweets.json");
		console.log(tweets);
		var zen = yield $.get("data/zen.json");
		console.log(zen);
	});

	function wrapGen(generator){
		var gen = generator();
		function handle(yielded){
			if(!yielded.done){
				yielded.value.then(function(data){
					return handle(gen.next(data));
				})
			}
		}
		return handle(gen.next());
	}
}