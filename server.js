var express = require('express');
var mongoose = require("mongoose");
const Raspberry_Pi_list = require('./data_modules/Raspberry_Pi_list.js');
const device = require('./data_modules/device.js');
const add_device = require('./events/add_device.js');
const add_Raspberry_PI = require('./events/add_Raspberry_PI.js');
const add_user = require('./events/add_user.js');

var app = express();

var db = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/acer_independent_study");
db.Promise = global.Promise;


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

add_device(app);
add_Raspberry_PI(app);
add_user(app);

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {

    var host = server.address().address

    console.log("Server running at http://127.0.0.1:3000", host, port)

})