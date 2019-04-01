// Symboles are primitive type, it represents unique identifier, Typecasting
// Basics
/*

The Symbol() function returns a value of type symbol, has static properties that expose several members of built-in objects, Every symbol value returned from Symbol() is unique.
  A symbol value may be used as an identifier for object properties; this is the data type's only purpose.*/

let symbol = Symbol('debug');
//symbol will represent unique id
console.log(typeof symbol); //primitive

//They are unique
let anotherSymbol = Symbol('debug');
console.log(symbol == anotherSymbol);

let obj = {
	name: 'abhi',
	[symbol]: 22
}
console.log(obj); // name: 'abhi'
console.log(obj[symbol]); //22


//---------------------- create symbol having same id

let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');
console.log(symbol1 == symbol2); //true

let person = {
	name: 'mad',
	age: 30
};
function makeAge(person) {
  let ageSymbol = Symbol.for('age');
  person[ageSymbol] = 27;
}
makeAge(person);

//------------------------------------Advantage of unique id

console.log(person[symbol1]);
console.log(person["age"]);

/* ================================================  */

class P{}

P.prototype[Symbol.toStringTag] = 'P';
let per = new P();
console.log(" <> "+ per); //overwritten by symbol


// -------------------------------------------  //

let a = [1, 2, 4, 7];
a[Symbol.toPrimitive] = function(){
	return 999;
}
console.log("\n" + a);