<template>
  <div id="app">
    <div id="index">
      <!-- <router-link to="/"></router-link> | -->
      <!-- <router-link to="/First">First</router-link> -->
      <!-- <img src="./assets/img/first4.jpeg" width="100%" height="600px"> -->
      <img id="back" src="./assets/img/index.jpg">
      <img id="mine" src="./assets/img/mine.jpeg" alt="" >
    </div>
   <div id="index-1">
     <h1>hello,我叫王珂</h1>
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
#index{
  position:relative;
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
    animation:fadeInUp 1s ease both;
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
