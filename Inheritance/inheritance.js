function car(){

	this.color = "RED";
}

function bmw(){
	this.type  = "BMW";
}



bmw.prototype = new car();
var a = new bmw();
console.log(a.color);