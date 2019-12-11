var express = require('express');
var mongoose = require("mongoose");
const add_device = require('./events/add_device.js');
const add_Raspberry_PI = require('./events/add_Raspberry_PI.js');
const add_user = require('./events/add_user.js');
const check_status = require('./events/check_status.js');
const change_status = require('./events/change_status.js');
const check_user = require('./events/check_user.js');
const device_list = require('./events/device_list.js');
const keep_online = require('./events/keep_online.js')

var app = express();

var db = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/acer_independent_study");
db.Promise = global.Promise;

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

add_device(app);
add_Raspberry_PI(app);
add_user(app);
check_status(app);
change_status(app);
check_user(app);
device_list(app);
keep_online(app);
