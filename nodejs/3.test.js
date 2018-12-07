//回调函数 可以是同步也可以异步

function waitFive(name,function_name){
var pus=0;
var currentData=new DataCue();
while(pus<5000){
    var now=new DataCue();
    pus=now-currentData;
}
function_name(name)
}

function echo(name){
    console.log(name);
}

waitFive('laoshan',echo);
console.log('is');