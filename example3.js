// REST Parameters
function sum(...toAdd) {
	var result = 0;
	for(var i=0 ; i< toAdd.length ; i++ ){
		result += toAdd[i]; 
	}
	return result;
}
console.log(sum(100,10,'1'));


// Spread Operator

let number = [1,2,3,4,5];
//console.log(...number);
// take array, and separate/ split up the array 
console.log(Math.max(...number));


// For-of Loop

let test = [1.23, 1.10, 3.43];
for(let te of test){
	// similar to for loops
	console.log(te);
}

// Template Literals

let name = 'Abhishek';
let desc = `Your name is ${name}`;
console.log(desc);
// `` -> backticks

// Destructuring

let numb = [1,2,3];
let [a,b] = numb;
let [c,...d] = numb;
console.log(c + ' '+ d + '\n');
console.log(a + ' ' +b); //we are getting copy of value array has
console.log(numb);

//Destructuring Objects

let obj = {
	naam: 'Ab',
	country: 'Ind'
}
let {naam, country} = obj;
console.log(naam + ' ' +country);

