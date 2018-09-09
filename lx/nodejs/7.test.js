function Person(){
    this.eat=function(){
        console.log("eating")
    }
    this.say=function(){
        console.log("saying")
    }
}
module.exports=Person




exports.eat=function(){
    console.log("eating")
}
exports.say=function(){
    console.log("saying")
}



module.exports={
    'eat':function(){
        console.log("eating")
    },
    'say':function(){
        console.log("saying")
    }
}

exports.arr['haha','hehe'];
