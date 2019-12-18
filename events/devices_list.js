var fs = require('fs');
const Raspberry_Pi_list = require('../data_modules/Raspberry_Pi_list.js');

module.exports = (app,root_path) => {
    app.engine('html', function (filePath, options, callback) {
        fs.readFile(filePath, function (err, content) {
            if (err) return callback(err)
            var rendered = content.toString()
                .replace('{device_id}', options.content_id)
                .replace('{device_status}', options.content_status)
                .replace('{result}', options.web_result)
                .replace('{number}', options.number)
            return callback(null, rendered)
        })
    })
    app.set('views', root_path + "/" + 'views')
    app.set('view engine', 'html')
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
                    var result='';
                    device_list.forEach(element => {
                        result+='<div class="col"><img src="'+(element.get("status")?"/public/images/radio_on.png":"/public/images/radio_off.png")+'" alt="">'+'<div class="device_id">裝置名稱:'+element.get("name")+'</div></div>';
                    });
                    var number=device_list.length+"";
                    app_res.render('devices_list', {
                        web_result:result,
                        number:number
                    });
                }
                catch{
                    app_res.send("no");
                }
            }
        });

    });
}