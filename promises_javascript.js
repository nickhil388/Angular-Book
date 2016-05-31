console.log('Script Started...');

var task = new Promise(function(res , rej){
 setTimeout(function(){
		console.log(" Its Timeout !");
		res("Promise resolved");
		},10000);
 });


task.then(function(Res){
	console.log(Res);
});

