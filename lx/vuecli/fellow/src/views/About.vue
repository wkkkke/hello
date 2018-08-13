<template>
  <div class="about">
    <h1>This is an about page</h1>
  
  <div>
    <h1>局部方法</h1>
    <button @click="add">加1</button>
    <button @click="reduce">减1</button>
    {{num}}
    </div>
  </div>
</template>
<script>
import {mapstate} from "@store"
export default {
  data(){
    return{
      num:0
    }
  },
  // 
  // 
  computed:mapState([
    "count"
  ]),
  methods:{
    add(){
      this.num++
    },
    reduce(){
      this.num--
    }
  }
}
</script>

