module.exports=(app,root_path)=>{
    app.get('/public/images/:file_name', function (req, res) {
        console.log(__dirname);
        res.sendFile(root_path + "/public/images/"+req.params.file_name);
    })
}