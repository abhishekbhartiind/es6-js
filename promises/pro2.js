let promise1 = new Promise(function(resolve, reject) {
	setTimeout(function(){
		resolve('Done!');
	},1000);
});
let promise2 = new Promise(function(resolve, reject) {
	setTimeout(function(){
		resolve('Yo');
		//reject('Failed!');
	},2000);
});

Promise.all([promise1, promise2])
	.then(function(success){
		console.log(success)
	}).catch(function(error){
		console.log(error);
	});

Promise.race([promise1, promise2])
	.then(function(success){
		console.log(success)
	}).catch(function(error){
		console.log(error);
	});	