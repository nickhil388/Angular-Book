angular.module('mod1',['mod2'])
.config(function(){
	console.log("Config Loaded");	
})
.run(function(){
	console.log("Run Loaded")
})

angular.module('mod2', []);


/*


mod2
|   |_ service2
|   |_ controller2
|   
V   
mod1
  |_ service2
  |_ controller2
  |_ service1
  |_ controller1

*/