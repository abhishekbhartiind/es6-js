function add(a, b, callback){
	return new Promise((resolve, reject) => {
		if(typeof a === 'number' && typeof b === 'number'){
			callback(null, a+b);
			//resolve(a+b);
		}else{
			callback('err', null);
			//reject()
		}
	});
}

add(5, 5, (err, result) => {
	if(err){
		console.log(err);
	}else{
		console.log(result);
	}
})