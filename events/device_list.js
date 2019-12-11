const Raspberry_Pi_list = require('../data_modules/Raspberry_Pi_list.js');

module.exports = (app) => {
    app.get("/user:user_id/list", function (app_req, app_res) {
        var wherestr = { "user": app_req.params.user_id };
        Raspberry_Pi_list.find(wherestr, function (f_err, f_res) {

            if (f_err) {
                console.log("Error:" + f_err);
            }
            else {
                console.log("Res:" + f_res);
                try {
                    var device_list = f_res[0].get("device");
                    var result="<p>裝置列表:</p>";
                    device_list.forEach(element => {
                        result+="<p>"+"裝置"+element.get("_id")+" 狀態:"+(element.get("status")?"開啟":"關閉")+"</p>";
                    });
                    result+="<p>您的家中目前共有"+device_list.length+"個家電由 Line Bot 智慧家居控制"+"</p>"
                    app_res.send(result);
                }
                catch{
                    app_res.send("no");
                }
            }
        });

    });
}