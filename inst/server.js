var express = require('express');
var http = require('http');
var app = express();
var baseurl = "./www/";
app.use(express.static(baseurl))
http.createServer(app).listen(5000, function(){
	console.log('Starting directory: ' + process.cwd()+' with baseurl: '+baseurl);
});
