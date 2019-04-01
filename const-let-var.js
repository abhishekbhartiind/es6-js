/*

		<< VAR >>
1.
for(var i=0 ; i<10;i++){
	console.log(i)
}
console.log('after loop', i);	

You expect i to be scoped to just this context,
but also have value outside func.

2.
function counter() {
	for(var i=0 ; i<10;i++){
		console.log(i)
	}
}
counter()
console.log('after loop', i);
Here i is scoped to func counter.


3.
Func is declared ad then it is immediatly
call this is called as "Immideately Invoked Function Expression"
It's used to keep the variable inside the scope of func.
it creates cohesive block of safe-heaven.

"JavaScript variables are hoisted: they are hoisted to top of their
function here it puts var i=0 to the top of the func.

If there no var declaration, then javaScript intepreter puts var i;
at the top of the func.
"

use strict: to restrict the scope of variables
"use strict";
var i= 9898989;
(function () {
	//var i;
	for(i=0 ; i<10;i++){
		console.log(i)
	}
})()
console.log('after loop', i);

*/
"use strict";
var i= 9898989;
(function () {
	//var i;
	for(i=0 ; i<10;i++){
		console.log(i)
	}
})()
console.log('after loop', i);