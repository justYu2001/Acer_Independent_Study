const Raspberry_Pi_list = require('../data_modules/Raspberry_Pi_list.js');
const device = require('../data_modules/device.js');

module.exports = (app) => {

    app.get("/Raspberry_Pi:Raspberry_Pi_id/add_device:device_id", function (app_req, app_res) {
        const newdevice = new device({
            _id: app_req.params.device_id,
            status: false
        });
        newdevice.save(function (f_err, f_res) {

            if (f_err) {
                app_res.send("Error:" + f_err);
                console.log("Error:" + f_err);
            }
            else {
                app_res.send("Res:" + f_res);
                console.log("Res:" + f_res);
            }

        });
        var wherestr = { "_id": app_req.params.Raspberry_Pi_id };
        var updatestr = { "$push": { "device": app_req.params.device_id } };
        Raspberry_Pi_list.find(wherestr, function (f_err, f_res) {

            if (f_err) {
                console.log("Error:" + f_err);
            }
            else {
                console.log("Res:" + f_res);
                console.log(f_res[0].get('device').includes(app_req.params.device_id));
                if (!f_res[0].get('device').includes(app_req.params.device_id)) {
                    Raspberry_Pi_list.findByIdAndUpdate(app_req.params.Raspberry_Pi_id, updatestr, function (add_err, add_res) {

                        if (add_err) {
                            console.log("Error:" + add_err);
                        }
                        else {
                            console.log("Res:" + add_res);
                        }

                    });
                }
            }
        });

    });

}