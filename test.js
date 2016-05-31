var classA =  {
	 num : 5,
	 name:  'ClassA'
};



var classB = {
	age :17
}

classB.__proto__ =  classA;


console.log(classB.num);




var square = {
	side : 4	
};

var shape = function(){
	this.color = "RED";
}

var sh = new shape();
sh.__proto__= square;


console.log(sh.side);


var SuperSet = function(){
	this.type = "parent";
	this.capacity = "1000";
	this.totalSubsets = "100";
}
var SubSet = function(){
	this.type = "child";
	this.capacity="10";
}

SubSet.prototype.totalSubsets =  new SuperSet().totalSubsets;
var v = new SubSet()
console.log(v.totalSubsets);



console.log("---- Company/Employee ----");

var Company = function(name, address, type){
	this.company_name = name;
	this.company_address = address;;
	this.company_type = type;
}


var Employee = function(name, emp_id, designation){
	this.emp_name = name;
	this.emp_id = emp_id;
	this.designation=designation;
}

Employee.prototype= new Company("Infosys","Cyber City, Gurgaon","IT");


var ravi = new Employee('Ravi', 1204, "Java Developer");

for(v in ravi){
	console.log(ravi[v]);
}
