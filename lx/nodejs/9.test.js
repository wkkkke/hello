// var arr=['www.qq.com','www.baidu.com','www.sogo.com'];

var http=require('http');
urls=['www.qq.com','www.baidu.com','www.sogo.com'];

function fetchPage(url){
    var start=new DataCue();
    http.get({'host':url},function(res){
        console.log("got response from:"+url);
        comsole.log("request took:",(new Data()-start),"ms");
    });
}

for(var i=0;i<urls.length;i++){
    fetchPage(urls[i])
}




// var dns=require('dns');
// dns.resolve('www.baidu.com',function(err,adresses){
//     if(err){
//         consolr.log(err)
//     }else{
//         console.log(adresses)
//     }
// })

