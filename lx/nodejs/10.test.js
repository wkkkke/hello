var http=require('http');

http.creatServer(function(req,res){
    res.writeHead(200,{'cont-type':'text/html'});
    res.end('<h3>hello</h3>')
}).listen(3000)

console.log('serve start');