//vuex的核心管理对象模块

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

//状态对象
const state = {
	todos: [
	],
	viewKey: 'all',
	
	
	
}

//更新状态  包含了多个 更新状态【state】函数的对象
const mutations = {
	 setData(state,payload){
     state.todos = payload
    //这里打印下看下是否有接收到,
//   console.log(state.todos);
   },
	add2(state,abc){
            state.todos.push(abc)
            console.log(abc)
            console.log(state.todos)
        } ,
     changeViewKey(state, key) {
      state.viewKey = key
    },
//	js1(state, {v}) {
//    state.val = v 
//    console.log(state.val)      
//
// },
  	chang1(state,val){
  		
  		state.todos.length = val
  		console.log(state.todos.length)
  		if(state.todos.lenght <val){
  			state.todos.length == val
  		}
  	}
	
}

//异步处理  包含了多个事件回调处理函数的对象
const actions = {
	add1({commit},abc){
		console.log(abc.title)
		if(abc.title){
			commit('add2',abc)
		}else{
			alert('请输入内容')
		}
	},
	
	all1({commit},val){
		commit('all1',val)
	},
	deleall({commit}){
		commit('deleall2')
	}
}

//包含了多个计算属性函数的对象
const getters = {
	checkSize(state){
		return state.todos.filter(x => x.completed === true).length
	},
	infolist(state) {
      if (state.viewKey === 'all') {
        return state.todos
      }
      if (state.viewKey === 'undone') {
        return state.todos.filter(x => !x.completed)
      }
      if (state.viewKey === 'done') {
         return state.todos.filter(x => x.completed)
      }
      return state.todos.filter(x => x.completed)
    }
	
}

export default new Vuex.Store({
	//状态对象
	state,
	//更新状态  包含了多个 更新状态【state】函数的对象
	mutations,
	//异步处理  包含了多个事件回调处理函数的对象
	actions,
	//包含了多个计算属性函数的对象
	getters
})