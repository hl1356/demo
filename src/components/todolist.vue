<template>
	
		<ul class="todo-main">
       <todoitem v-for="(item,index) in infolist" :key="index" :item="item" :index="index"/>
       
      </ul>
	
	 
</template>

<script>
import todoitem from './todoitem'
import {mapState,mapGetters} from 'vuex'
export default{
	components:{
		todoitem
	},
	computed:{
		...mapState(['todos']),
		...mapGetters(['infolist'])
	}
		
}
</script>

<style>

.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
  overflow: hidden;
}


</style>