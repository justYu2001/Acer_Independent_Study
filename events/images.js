module.exports=(app,root_path)=>{
    app.get('/public/images/line_bot_icon.png', function (req, res) {
        console.log(__dirname);
        res.sendFile(root_path + "/public/images/line_bot_icon.png");
    })

    app.get('/public/images/radio_on.png', function (req, res) {
        console.log(__dirname);
        res.sendFile(root_path + "/public/images/radio_on.png");
    })

    app.get('/public/images/radio_off.png', function (req, res) {
        console.log(__dirname);
        res.sendFile(root_path + "/public/images/radio_off.png");
    })
}