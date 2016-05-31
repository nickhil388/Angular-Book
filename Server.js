var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send({message: 'node server'});
})

app.get('/profile', function(req,res){
	var profileData = {
		name : "Alex",
		company : "Google",
		designation : "Data Scientist"
		experience : "9Yrs"
	}

	res.send({profile: profileData});
})


app.listen(3000, function () {
	console.log("Server Started Port : 3000");
})