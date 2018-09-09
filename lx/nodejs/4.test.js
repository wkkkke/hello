function havelunch(food,drink,havelunch){
console.log('Having lunch of'+food+","+drink)
if(callback&&typeof(callback)==='function'){
    setTimeout(function(){
        callback()
    },5000);
}
}

havelunch('toast','coffe',function(){
    console.log('Finished lunch');
})