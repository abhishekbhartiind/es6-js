// Promise: They are a useful object a helper to work ith asynchronous tasks liks they are 
// name well implies they us a promise that they will give us back some data sometimes in the future
// Other way to handle aysnchronous tasks is to nest thousands of call back

let promise = new Promise(function(resolve, reject) {
	setTimeout(function(){
		resolve('Done!');
		//reject('Failed!');
	},1500)
});
promise.then(function(value){
	console.log(value)
},function(error){
	console.log(error);
}); 

function waitAsecound(seconds){
	return new Promise(function(resolve,reject){
	  if(seconds>2){
	  	reject('rejected!');
	  }	else {
		setTimeout(function(){
			seconds++;
			resolve(seconds);
		},1000);
	  }	
	});
}

waitAsecound(2)
	.then(waitAsecound)
	.then(function(seconds){
		console.log(seconds);
	}).catch(function(error){
		console.log(error);
	});