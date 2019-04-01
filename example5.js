class People{
	constructor(name){
		this._name = name;
	}
	get_name(){
		return this._name.toUpperCase();
	}
	//encapsulation
	// getter - we control the access of data actually return
	// setter - here we set new value 
	set_name(value){
		if(value.length >2){
			this._name =value;
		}
		console.log('Reject');
	}
}

let person = new People('Elisa');
console.log(person._name);

person.name = 'Annie';
console.log(person.name); 
 /*---------------------------------*/

class ConvertableArray extends Array{
	convert(){
		let returnArray = [];
		this.forEach(value => returnArray.push('Converted ' + value));
		return returnArray;
	}
}

let nArray = new ConvertableArray();
nArray.push(1);
nArray.push(2);
console.log("\n "+ nArray.convert());
