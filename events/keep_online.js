module.exports = (app) => {
    var port = process.env.PORT || 3000;
    var server = app.listen(port, function () {

        var host = server.address().address

        console.log("Server running at http://127.0.0.1:3000", host, port)

    });
    setInterval(function () {
        server = app.listen(port, function () {

            var host = server.address().address

            console.log("Server running at http://127.0.0.1:3000", host, port)

        });
    }, 20 * 60 * 1000);
}
