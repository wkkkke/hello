<template>
    <div>
       <aplayer>   
    </div>
</template>
<script>
import aplayer from 'vue-aplayer'
export default {
    components:{
        aplayer
    },
    data(){
        return{
            dataList:[]
        }
    },
    created(){
         this.getData()
    },
    methods:{
        getData(){
            axios.get('./data/musicdata.jason')
            .then((res)=>{
          
            })
            .catch((res)=>{
                
            })
        }
    }
}
</script>
