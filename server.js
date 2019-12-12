var express = require('express');
var mongoose = require("mongoose");
const add_device = require('./events/add_device.js');
const add_Raspberry_PI = require('./events/add_Raspberry_PI.js');
const add_user = require('./events/add_user.js');
const check_status = require('./events/check_status.js');
const change_status = require('./events/change_status.js');
const check_user = require('./events/check_user.js');
const devices_list = require('./events/devices_list.js');
const keep_online = require('./events/keep_online.js')

var app = express();

var db = mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_fs2kfjw8:2moivalsi0mlmhalemhkd0kf02@ds117535.mlab.com:17535/heroku_fs2kfjw8"/*"mongodb://localhost/acer_independent_study"*/);
db.Promise = global.Promise;

app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/views/device_style.css', function (req, res) {
    res.sendFile(__dirname + "/views/device_style.css");
})

app.get('/views/devices_list_style.css', function (req, res) {
    res.sendFile(__dirname + "/views/devices_list_style.css");
})

add_device(app);
add_Raspberry_PI(app);
add_user(app);
check_status(app,__dirname);
change_status(app);
check_user(app);
devices_list(app,__dirname);
keep_online(app);
