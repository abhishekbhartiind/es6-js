/* 
	<< GENERATORS >>
	co is generator func
*/

const fetch = require('node-fetch');
//const co = require('co');

/*

fetch('http://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json())
	.then(post => post.title)
	.then( x => console.log(x))

*/

/*co(function *(){
	const url= 'http://jsonplaceholder.typicode.com/posts/1'
	const response= yield fetch(url)
	const post = yield response.json()
	const title = post.title
	const body = post.body
	console.log('Title:'+ title + "\n"+ 'Body:'+body)
})*/

/*run(function *(){
	const url= 'http://jsonplaceholder.typicode.com/posts/1'
	const response= yield fetch(url)
	console.log(response)
	const post = yield response.json()
	console.log("post is \n", post)
	const title = post.title
	const body = post.body
	console.log('Title:'+ title + "\n"+ 'Body:'+body)
})

function run(generator){
	const iterator = generator()
	//it gives iterator, going to have next value 
	const iteration = iterator.next()
	const promise = iteration.value
	//promise.then(x=> iterator.next(x))
	promise.then(res => {
		var anotherIterator = iterator.next(res)
		const anotherPromise = anotherIterator.value
		anotherPromise.then( post => iterator.next(post))
	})
	
}*/

run(function *(){
	const url= 'http://jsonplaceholder.typicode.com/posts/1'
	const response= yield fetch(url)
	const post = yield response.json()
	const title = post.title
	return title
}).catch(error => console.error(error.stack))
	.then(x=> console.log('Result:' ,x))

function run(generator){
	const iterator = generator()
	//it gives iterator, going to have next value 
	function iterate(iteration){
		if(iteration.done) return iteration.value
		const promise = iteration.value
		return promise.then( res => iterate(iterator.next(res)))
	}
	return iterate(iterator.next())
}