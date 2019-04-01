/*
	<< LET >>
 Let introduces block scope, let is only accessible 
 inside for loops. Let is new var

*/

"use strict";
var i= 9999;
for(let i=0 ; i<10;i++){
	console.log(i)
}
if(true){
	let i= 8888
}
console.log('after loop', i);

/*
	<< CONST >>
	here value is constant, can't be changed
	assigned. It is just like let but can't re assign;

*/
console.log("----CONST----")
"use strict";
const x= {
	y: 5
}
x.y=6;
console.log(x);

const a=1
console.log(a);
/*
	We want to "Minimize Mutable State" 

*/
