/*
					Iterators & Generators
	
	All object that knows how to access value in the collection of object,
	eg for loop.
	Generator is closely related to, is a fn which yield certain value.. when you 
	call it.

*/

var array = [111, 222, 333];
console.log(typeof array[Symbol.iterator]); //function

let it =  array[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // Done will show, once we are reaching undefined value

// You can make any object iteratable, implement array[Symbol.iterator]
// or override the behavior  

array[Symbol.iterator] = function(){
	let nextValue = 10;
	return{
		next: function(){
			nextValue++;
			return {
				done: nextValue > 15 ? true : false,
				value: nextValue
			}
		}
	};
}

for (let ele of array){
	console.log(ele);
}