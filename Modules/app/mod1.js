angular.module('mod1')
.controller('controller1', function ($scope, service2) {
	console.log("Controller1 Loaded");
	console.log(service2.getMessage());
	
})
.service('service1', function(){
	this.getMessage = function(){
		return "Message from Module 1";
	}
})