var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');

// Index Page with the message of Hello World.
// app.get('/',function(req,res){
// 	res.send('Hello from the World')
// });

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist',function(req,res){
	console.log("I received a get request")  //prints in the terminal


	db.contactlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});

	//When passing data from server side Part 2
	// person1  = {
	// 	name : "Sagar",
	// 	email : "sagar.jhaa@gmail.com",
	// 	number : "(111) 111-1111"
	// };

	// person2 = {
	// 	name  : "Snigdha", 
	// 	email : "snigdha@kent.edu",
	// 	number: "(222) 222-2222" 
	// };

	// person3 = {
	// 	name : "Raghav",
	// 	email : "raghav@gmail.com",
	// 	number : "(330) 475-2172"
	// };

	// var contactlist = [person1,person2,person3];

	// res.json(contactlist)
});


app.post('/contactlist',function(req,res){
	console.log(req.body);
	db.contactlist.insert(req.body,function(err,doc){
		res.json(doc);
	})
});

//Command to listen on port 3000
app.listen(3000);

//Message to confirm that server is up and running
console.log('Serve is listening on 3000');
