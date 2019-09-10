const device = require('../data_modules/device.js');

module.exports = (app) => {
    app.get("/device:device_id/:cmd", function (app_req, app_res) {
        if (app_req.params.cmd == "turn_on") {
            var updatestr = { "status": true };
            device.findByIdAndUpdate(app_req.params.device_id, updatestr, function (add_err, add_res) {

                if (add_err) {
                    console.log("Error:" + add_err);
                    app_res.send("Error:" + add_err);
                }
                else {
                    console.log("Res:" + add_res);
                    app_res.send("Res:" + add_res);
                }

            });
        }
        if (app_req.params.cmd == "turn_off") {
            var updatestr = { "status": false };
            device.findByIdAndUpdate(app_req.params.device_id, updatestr, function (add_err, add_res) {

                if (add_err) {
                    console.log("Error:" + add_err);
                    app_res.send("Error:" + add_err);
                }
                else {
                    console.log("Res:" + add_res);
                    app_res.send("Res:" + add_res);
                }

            });
        }
    });
}