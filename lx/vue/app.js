var list=[
    {
        title:"吃饭1",
        isChecked:false
    },
    {
        title:"吃饭2",
        isChecked:true//状态为选中
    }
];

//实例化
new Vue({
    el:".main",//挂载点
    data:{
        list:list
    },
    methods:{
        addTodo(){
           //向list中添加一项任务
               this.list.push({
                   //事件处理函数中this指向的是当前这个根实例 .main ]
                   title:this.todo,
                   //e.target.value
                   isChecked:false
           });
           this.todo=''
        },
        deleteTodo(todo){//删除任务
               var index=this.list.indexOf(todo);
               this.list.splice(index,1)
        }
        
    }
});