<template>
	  <div class="todo-footer">
        
        
         <span> 全部:{{todos.length}}</span>	
         	<select v-model="val" @change="change(val)">
					 <option  value="10">10</option>
					  <option  value="50">50</option>
					   <option  value="100">100</option>
					</select>
       		<button :type="viewKey === 'all'"  @click="changeList('all')">所有</button>
       		<button :type="viewKey === 'undone'"  @click="changeList('undone')">未完成</button>
       		<button :type="viewKey === 'done'"  @click="changeList('done')">已完成</button>
       
      </div>
</template>

<script>
	import {mapGetters,mapState} from 'vuex'
	export default{
		data(){
			return{
				val:""
			}
		},
		computed:{
			...mapGetters(['infolist']),
			...mapState(['viewKey','todos'])
//				val:{
//				get(){
//					return this.list1.forEach(item => item)
//				},
//				set(value){
//				this.$store.commit('js1', {v:value})
//				
//				}
//			}	    
//			
		},
		methods:{
			changeList(key){
				 this.$store.commit('changeViewKey', key)
				 console.log(key)
			},
			change(val){
				this.$store.commit('chang1',val)
				console.log(val)
					}
		},
		
		
		
	}	

</script>

<style>

 option{
 	background: white;
 }
	
</style>