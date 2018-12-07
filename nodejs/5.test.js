function Person(){
    this.answer=function(){
        console.log("I am answering other questions");
    };
    this.think=function(callback){
        console.log("thinking~")
        setTimeout(function(){
           callback()
        },5000)
    }
       
    }

    module.exports=Person;

// var person=new person();
// person.think(function(){
//     console.log("thinking 5s get the right answer")
// });
// person.answer()
