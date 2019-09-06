var express = require('express');
var app = express();

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})
var port = process.env.PORT || 3000;

var server = app.listen(port, function () {

    var host = server.address().address

    console.log("Server running at http://127.0.0.1:3000", host, port)

})
