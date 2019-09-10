var fs = require('fs');
const device = require('../data_modules/device.js');

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
    app.get("/device:device_id", function (app_req, app_res) {
        device.findById(app_req.params.device_id, function (f_err, f_res) {

            if (f_err) {
                console.log("Error:" + f_err);
            }
            else {
                console.log("Res:" + f_res);
                app_res.render('device', {
                    id: app_req.params.device_id,
                    status: (f_res.get("status") ? "開啟" : "關閉")
                });
            }
        });

    });
}