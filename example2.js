//var button = document.querySelector('button').innerHTML();
var fn = () =>  console.log(this);
//button.addEventListener('click', fn);

fn();

function isEqualTo(number =10 ,compare = number) {
	console.log(" " + number + " " +compare);
	return number == compare;
}
console.log(isEqualTo());

// Object Literal

let obj = {name: 'Abhi', age: 25};
console.log(obj);

let name ="Mad Max", age = 26;
let obj2 = {
	name, age, greet(){
		console.log(`${this.name}, ${this.age}`)
	}
}

obj2.greet();
// string property for methods
let ageField = "age";
let obj3 = {
	"name": "Scooby",
	[ageField]:28,
	"greet"(){
		console.log(`${this.name}, ${this.age}`)
	}
};

obj3["greet"](); //since greet is string


// Dynamically add age
let obj4 = {
	"name": "Scooby",
	age,
	"greet"(){
		console.log(`${this.name}, ${this.age}`)
	}
};