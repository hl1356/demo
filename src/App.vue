<template>
	 <div class="todo-container">
    <div class="todo-wrap">
    	<todohead/>
    	<todofoot/>
    	<todolist/>
    	
     
    
    </div>
  </div>
</template>

<script>
	import todohead from './components/todohead'
	import todolist from './components/todolist'
	import todofoot from './components/todofoot'
	import axios from 'axios'
	import {mapState,mapActions,mapGetters} from "vuex"
	export default {
		created() {
	       // 请求数据
	       axios.get("http://jsonplaceholder.typicode.com/todos")
	         .then((res) => {
//             console.log(this)
	           // let _this = this;
//            console.log(res.data)
	          this.$store.commit("setData", res.data);
	         });
	   },
		
		
		components:{
			todohead,
			todolist,
			todofoot
		}
	
	}
</script>

<style>
/*app*/
.todo-container {
  width: 900px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
html{
	 background:#C1E2B3;
}
*{
	margin:0;
	padding:0;
}

</style>