var http=require("http") //http comes with node's core,so no need of installation

http.createServer(server).listen(7000)


function server(req,res){
    res.write('Akhil Mohanan')
    res.end()
} 

//this function can be passed inside of the createServer directly

http.createServer(function(req,res){
    res.write('Akhil Mohanan S1MCA')
    res.end()
}).listen(7500)   //function is passed directly