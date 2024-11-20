var http=require('http')
var fs=require('fs')  //fs for taking another, file system module

http.createServer(function (req,res){

    fs.readFile('sample.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()

    })



}).listen(7200)