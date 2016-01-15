var express = require('express');
var app = express();

app.get('/',function(req,res){

	res.send('Hello from the World')

});


app.listen(3000);
console.log('Serve is listening on 3000');
