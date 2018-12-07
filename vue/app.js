

//实例化
new Vue({
    el:".main",//挂载点
    todo:"",
    editorTodos:'',//记录正在编辑的信息
    beforeTitle:'',//记录正在编辑的数据的title
    data:{
        list:[
            {
                title:"吃饭1",
                isChecked:false
            },
            {
                title:"吃饭2",
                isChecked:true//状态为选中
            }
        ]
    },
    computed:{
        noCheckedLength:function(){
          return  this.list.filter(function(item){
                return !item.isChecked
              }).length
        }
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
           this.todo=''//添加完毕后input中继续为空
        },
        deleteTodo(todo){//删除任务
               var index=this.list.indexOf(todo);//找到todo所在list中的位置
               this.list.splice(index,1)
        },
        editorTodo(todo){//编辑任务
            console.log(todo);
            this.editorTodos=todo;
            this.beforeTitle=todo.title;//编辑任务时记录一下编辑这条任务的title，方便取消
        },
        editorTodoed(todo){//编辑完成
           this.editorTodos=''
        },
        cancelTodo(todo){//取消编辑
           todo.title=this.beforeTitle;
           this.editorTodos='';//让div显示，input隐藏
           this.beforeTitle=''
        }
        
    },
    directives:{//自定义指令
        "focus":{
            updata(el,binding){//el：当前指令绑定的元素,binding:一个对象的一些信息
                if(binding.value){
                    el.focus();
                }
            }
        }
    }
});