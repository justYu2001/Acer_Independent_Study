var fs = require('fs');
const Raspberry_Pi_list = require('../data_modules/Raspberry_Pi_list.js');

module.exports = (app,root_path) => {
    app.set('views', root_path + "/" + 'views')
    app.set('view engine', 'html')
    app.get("/Raspberry_Pi:Raspberry_Pi_id/device:device_id", function (app_req, app_res) {
        var wherestr = { "_id": app_req.params.Raspberry_Pi_id, "device._id": app_req.params.device_id };
        Raspberry_Pi_list.find(wherestr, function (f_err, f_res) {
            if (f_err) {
                console.log("Error:" + f_err);
            }
            else {
                try {
                    console.log("Res:" + f_res);
                    var pos = f_res[0].get("device._id").indexOf(app_req.params.device_id);
                    app_res.render('device', {
                        content_id: app_req.params.device_id,
                        content_status: (f_res[0].get("device.status")[pos] ? "開啟" : "關閉")
                    });
                }
                catch {
                    app_res.send("No");
                }
            }
        });

    });
}
