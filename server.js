var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})
var port = process.env.PORT || 8081;

var server = app.listen(port, function () {

    var host = server.address().address

    console.log("Server running at http://127.0.0.1:8081", host, port)

})
