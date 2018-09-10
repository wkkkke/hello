var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring=require('querystring');
var router=require('router')

http.createServer(function(req,res){
    // console.log(req.headers)
    // console.log(url.parse)
    var pathname=url.parse(req.url).pathname;
    switch(pathname){
        case'/':
        goIndex(res);
       break;
       case'/parse':
       goDns();
       break;
       default:
       res.writeHead(404,{'Content-type':'text/plain'});
       res.end('no page find');
    }
}).listen(3000)

function goIndex(res){
    var pathname=__dirname+"./module/"+url.parse('index.html').pathname
    var indexPage=fs.readFileSync(pathname,'utf-8')
    res.writeHead(404,{'Content-type':'text/html'});
    res.end(indexPage);
}

function goDns(res){
    var domain="www.qq.com";
    dns.resolve4(domain,function(err,addresses){
        if(err){
            console.log(err)
        }else{
            res.writeHead(200,{'Content-type':'text/plain'});
            res.end(addresses);
            var str=querystring.stringify(addresses)
        }
    })
}

console.log()