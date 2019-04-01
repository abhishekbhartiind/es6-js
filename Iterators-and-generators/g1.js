// * make function generator and also include yield keyword

function *select(){
	yield 'India';
	yield 'World';
}
let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());

// to loop through the value that the generator gives us

//with arguments
function * gen(end){
	for (var i = 0; i < end; i++) {
		yield i;
	}
}
let g = gen(2);
console.log("----")
console.log(g.next());
console.log(g.next());
console.log(g.next());

// ---------------------------------------------- //
console.log("--------- throw -------------");
function * gen2(end){
	for (var i = 0; i < end; i++) {
		try{
			yield i;
		} catch(e){
			console.log(e);
		}
	}
}

let iii = gen2(2);
console.log(iii.next());
console.log(iii.throw('An error occured'));
console.log(iii.next());