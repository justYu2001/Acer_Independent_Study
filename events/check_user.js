var fs = require('fs');
const Raspberry_Pi_list = require('../data_modules/Raspberry_Pi_list.js');

module.exports = (app) => {
    app.get("/user:user_id", function (app_req, app_res) {
        var wherestr = { "user": app_req.params.user_id };
        Raspberry_Pi_list.find(wherestr, function (f_err, f_res) {

            if (f_err) {
                console.log("Error:" + f_err);
            }
            else {
                console.log("Res:" + f_res);
                app_res.send(f_res[0].get("_id"));
            }
        });

    });
}