module.exports=(app,root_path)=>{
    app.get('/views/device_style.css', function (req, res) {
        res.sendFile(root_path + "/views/device_style.css");
    })
    
    app.get('/views/devices_list_style.css', function (req, res) {
        res.sendFile(root_path + "/views/devices_list_style.css");
    })
}