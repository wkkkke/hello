<template>
  <div id="app">
    <div id="index" class="page">
      <!-- <router-link to="/"></router-link> | -->
      <!-- <img src="./assets/img/first4.jpeg" width="100%" height="600px"> -->
    
      <img id="mine" src="./assets/img/mine.jpeg" alt="" >
       <router-link class="introduce" to="/Mine">详细介绍</router-link>
   <div id="index-1">
     <h1>hello,我叫王珂</h1>
   </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
body,html{
  height:100%;
}
*{
  margin:0 auto;
}
#app{
  width:500%;
  height:100%;
}
.page{
  width:100%;
  height:100%;
   -webkit-transform:translate3d(0,0,0);
}

#index{
  overflow:hidden;
  position:relative;
 background-color: lightpink;
}
#index{
  position:relative;
}
.introduce{
  position:absolute;

}
#back{
  width:100%;
  height:100%;
}
#mine{
  width:170px;
  height:170px;
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-85px;
  margin-left:-85px;
  box-shadow: 0 12px 15px 0 rgba(0,0,0,.24), 0 17px 50px 0 rgba(0,0,0,.19);
  }
  #index-1 h1{
    color:#fff;
    /* animation:fadeInUp 3s ease both; */
     animation: fade-in 4s ease 0s 1;
    position:absolute;
    top:80%;
    left:50%;
    margin-left:-100px;
    text-shadow: 3px 4px lightcoral;
  }
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
