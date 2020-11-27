<template>
	  <div class="todo-header">
	  	<h5>addTodo</h5>
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title"  @keyup.enter="add1"/>
      </div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default{
		data(){
			return{
				title:"",
			}
		},
		methods:{
			add1(){
				const title = this.title.trim()
				const item1 = {
						title,
					completed:true
				}
				
	  			  this.title="";
				 this.$store.dispatch("add1",item1)
				
				
			}
		}
	}
</script>

<style>
	.todo-header{
		width:800px;
		height:100px;
		margin:0 auto;
		overflow: hidden;
		margin-left:0;
		
	}
	.todo-header input {
  width: 800px;
  height: 28px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
button{
	height:28px;
	width:60px;
}
h5{
	margin-top:20px;
}
</style>