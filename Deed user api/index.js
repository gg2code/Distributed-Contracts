let express = require('express');  //import express

let bodyParser = require('body-parser');  //import body parser

let mongoose = require('mongoose');  //import mongoose

let app = express();   //initialize the app

let apiRoutes = require("./api-routes")  //import routes


//configure body parser to handle post requests
app.use(bodyParser.urlencoded({
    extended :true
}));
app.use(bodyParser.json());

// connect to mongoose and set connection variable
mongoose.connect('mongodb://localhost/deed');

var db = mongoose.connection;
//setup server port
var port = process.env.PORT || 8080;


//send msg from default url
app.get('/',(req,res) => res.send(" Land deed details api 1 - Helloworld with express and nodemon "));

//Use api routes in the app
app.use('/api',apiRoutes)

//launch app to listen to specified port
app.listen(port,function(){
    console.log("Running RestHub on port " + port );
});
