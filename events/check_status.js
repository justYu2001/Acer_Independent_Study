var fs = require('fs');
const Raspberry_Pi_list = require('../data_modules/Raspberry_Pi_list.js');

module.exports = (app) => {
    app.engine('html', function (filePath, options, callback) {
        fs.readFile(filePath, function (err, content) {
            if (err) return callback(err)
            var rendered = content.toString()
                .replace('{id}', options.id)
                .replace('{status}', options.status)
            return callback(null, rendered)
        })
    })
    app.set('views', __dirname + "/" + 'views')
    app.set('view engine', 'html')
    app.get("/Raspberry_Pi:Raspberry_Pi_id/device:device_id", function (app_req, app_res) {
        var wherestr = { "_id": app_req.params.Raspberry_Pi_id, "device._id": app_req.params.device_id };
        Raspberry_Pi_list.find(wherestr, function (f_err, f_res) {

            if (f_err) {
                console.log("Error:" + f_err);
            }
            else {
                console.log("Res:" + f_res);
                app_res.render('device', {
                    id: app_req.params.device_id,
                    status: (f_res[0].get("device.status")[0] ? "開啟" : "關閉")
                });
            }
        });

    });
}