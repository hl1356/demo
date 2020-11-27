<template>
	 <li :style="item.completed?'background:#01b79d;':'background:#ec5656;'">
         
            <span>{{item.title}}</span>
         
        </li>
</template>

<script>
export default{
	props:{
		item:Object,
		index:Number
	}
	
	
	
}

</script>

<style>
li {
  list-style: none;
  float:left;
  width:255px;
  height: 56px;
  line-height: 28px;
  padding: 0 5px;
  border: 1px solid #ddd;
  background:#4CAE4C;
 text-align: justify;
text-justify: newspaper;
word-break: break-all;

margin:0 auto
}










</style>
 