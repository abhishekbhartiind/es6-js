class Helper{
	static logTwice(msg){
		console.log(msg);
	}
}
//let helper = new Helper();
Helper.logTwice('logged!');

// ------------------------------------ 

class Person{
	constructor(name){
		this.name = 'abhi';
	}
	abhi(){
		console.log('Hello ' + this.name + '\n Age '+ this.age);;
	}
}
//let person = new Person('Max');
//person.abhi();
//console.log(person.__proto__ === Person.prototype);

class Max extends Person{
	constructor(age){
		super(); //calling super constructor
		this.age = age; 
	}
	twice(){
		super.abhi(); //direct access to parent
		console.log('------');
		this.abhi();
	}
}
let max = new Max(27);
//console.log(max.__proto__ === Person.prototype); 
//max.twice();