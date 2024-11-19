var http=require("http") //http comes with node's core,so no need of installation

http.createServer(server).listen(7000)


function server(req,res){
    res.write('Akhil Mohanan')
    res.end()
}