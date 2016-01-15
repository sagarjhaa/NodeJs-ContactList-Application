var express = require('express');
var app = express();


// Index Page with the message of Hello World.
// app.get('/',function(req,res){
// 	res.send('Hello from the World')
// });

app.use(express.static(__dirname + "/public"));

//Command to listen on port 3000
app.listen(3000);

//Message to confirm that server is up and running
console.log('Serve is listening on 3000');
