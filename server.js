var express = require('express');
var app  = express();
var multer = require('multer');
var XLSX = require('xlsx');
var storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,"./upload");
    },
    filename : function(req,file,callback){
        //console.log(file.filename);
        callback(null,"table.csv");

    }
});
var upload = multer({storage:storage}).single('file');

app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(__dirname+ '/index.html');
});

app.get('/view',function(req,res){
    res.sendFile(__dirname + "/view.html");
});

app.post('/data',function(req,res){
    //console.log(htmlGen());

    var ans = htmlGen();    
    res.send(ans);


});
app.post('/upload',function(req,res){
    console.log('in upload');
    upload(req,res,function(err){
        if(err){
            //console.log(err);
            return res.send(err);
        }
        res.send("file is uploaded");
    });
});

var server = app.listen(3000,function(){

   console.log('listening on port 3000'); 
});

function htmlGen(){
    var workbook = XLSX.readFile(__dirname+"/upload/table.csv");
    var sheet_name_list = workbook.SheetNames;
    var result = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
    //console.log(typeof(result));
    return result;
    
}