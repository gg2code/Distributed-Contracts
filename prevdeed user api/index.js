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
mongoose.connect('mongodb://localhost/prevdeed');

var db = mongoose.connection;
//setup server port
var port = process.env.PORT || 8081;


//send msg from default url
app.get('/',(req,res) => res.send("Land deed details api 2 - previous deed - Helloworld with express and nodemon"));

//Use api routes in the app
app.use('/api',apiRoutes)

//launch app to listen to specified port
app.listen(port,function(){
    console.log("Running prev deed on port " + port );
});
