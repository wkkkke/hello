<template>
    <div class="slide">
        <div class="slideshow">
            <ul>
                <li v-for="(img,index)in imgArray" v-show="index==mark" :key="index">
                    <a href="#"><img src='img'></a>
                </li>
            
            </ul>
        </div>
    
    <div class="bar">
        <span v-for="(img,index)in imgArr" :class="{'active':index==mark}" :key="index"></span>
    </div>
    </div> 
</template>
<script>
export default {
    data(){
        mark:0
        return{
           imgArr:[
               "../img/div4pic1.jpg",
               "../img/div4pic2.jpg",
               "../img/div4pic3.jpg"
           ]
        }
    },
    methods:{
        autoPlay(){
            this.mark++;
            if(mark==3){
                this.mark=0
            }
        
        },
        play(){
            setInterval(this.autoPlay,2500)
        },
        change(i){
            this.mark=i
        },
        
    },
    created(){
        this.play()
    }
}
</script>
<style>

</style>


