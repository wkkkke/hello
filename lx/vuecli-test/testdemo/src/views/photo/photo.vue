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

  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .slide {
    width: 1024px;
    height: 320px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 1024px;
    height: 320px;
  }
  li {
    position: absolute;
  }
  img {
    width: 1024px;
    height: 320px;
  }
  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .bar span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .active {
    background: red !important;
  }

</style>


