angular.module('mod2')
.service('service2',function(){
	this.getMessage = function(){
		return "Message from Module 2";
	}
})
.controller('controller2', function(service2, service1){
	console.log("controller2 Loaded");
	console.log(service1.getMessage());
});

