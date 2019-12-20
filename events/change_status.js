const Raspberry_Pi_list = require('../data_modules/Raspberry_Pi_list.js');

module.exports = (app) => {
    app.get("/Raspberry_Pi:Raspberry_Pi_id/device:device_id/:cmd", function (app_req, app_res) {
        if (app_req.params.cmd == "turn_on") {
            var wherestr = { "_id": app_req.params.Raspberry_Pi_id, "device._id": app_req.params.device_id };
            var updatestr = { "device.$.status": true };
            Raspberry_Pi_list.update(wherestr, updatestr, function (add_err, add_res) {

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
            var wherestr = { "_id": app_req.params.Raspberry_Pi_id, "device._id": app_req.params.device_id };
            var updatestr = { "device.$.status": false };
            Raspberry_Pi_list.update(wherestr, updatestr, function (add_err, add_res) {

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