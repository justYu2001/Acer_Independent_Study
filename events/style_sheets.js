module.exports=(app,root_path)=>{
    app.get('/views/:file_name', function (req, res) {
        res.sendFile(root_path + "/views/"+req.params.file_name);
    })
}