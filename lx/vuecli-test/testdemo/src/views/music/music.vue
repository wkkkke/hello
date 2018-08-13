
<template>
 <div class="container">
   <a-player v-if='isShow' :autoplay='true' :music="musicList"></a-player>
 </div>
</template>
<script>
import Axios from 'axios'
import VueAplayer from 'vue-aplayer'
export default{
  data(){
    return {
      musicList:[],
      isShow:false
    }
  },
  mounted(){
    Axios.get('../../public/data/musicdata.json').then(res=>{
       let List = res.data.musicData;
      // console.log(res);
      List.forEach(element => {
        let obj = {
          title:element.title,
          pic:element.musicImgSrc,
          url:element.src,
          author:element.author,
          lrc:"../static/"+element.lrc
        }
        this.musicList.push(obj);
      });
        this.isShow=true; 
        console.log(this.musicList);
    }).catch(); 
  },
  components: {
    'a-player': VueAplayer
  }
}  
</script>
<style>
.music{
  margin:1rem 0;
}
</style>

