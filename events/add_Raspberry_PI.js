const Raspberry_Pi_list = require('../data_modules/Raspberry_Pi_list.js');

module.exports = (app) => {
    app.get("/add_Raspberry_PI:Raspberry_Pi_id", function (app_req, app_res) {
        const newRaspberry_PI = new Raspberry_Pi_list({
            _id: app_req.params.Raspberry_Pi_id
        });
        newRaspberry_PI.save(function (f_err, f_res) {

            if (f_err) {
                app_res.send("Error:" + f_err);
                console.log("Error:" + f_err);
            }
            else {
                app_res.send("Res:" + f_res);
                console.log("Res:" + f_res);
            }

        });
    });
}