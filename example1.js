// Hosting works with var
// You have declare var, before using them

//Arrow Fun
var fun = () => {
	console.log(`Hello from es6 array function`)
};
fun();

var fun2 = () => 'Hello from es6 array function shorter';
console.log(fun2());

var fun3 = ()=> {
	let a=2, b =3;
	return a+b;
};
console.log(fun3());

var fun4 = (a,b) => a+b;
console.log(fun4(2,5));

//var fun5 = (a) => a+5; if one arg
var fun5 = a => a + 5;
console.log(fun5(2));

setTimeout(() => console.log("Hello"), 1000);

