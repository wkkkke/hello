var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(){
    var pathname=url.parse(requestAnimationFrame.url).pathname;
    switch(pathname){
        case'/':
        gologin(resizeBy,req);
        break;
        case'/add':
        goPost(res,req);
        break;
        default:
        eres.writeHead(404,{'Content-type':'text/plain'})
        res.end('not page found');
    }
})

function gologin(res,req){
    
        var pathname=__dirname+'./module/'+url.parse('login.html').pathname
        var loginData=fs.readFileSync(pathname,'utf-8')
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(loginData);
    
}

function goPost(res,req){
       var postData="";
       req.setEncoding('utf8');
       req.addListener('data',function(postChunkData){
           postData+=postChunkData;
       });
       req.addListener('end',function(){
           console.log(postData);
       })
}
console.log('server start')