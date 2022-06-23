<!-- html结构 -->
<template>
    Child
    <h4>我是父组件传递过来的:{{ title }}</h4>
    <ul>
        <li v-for="item in data" key="item">{{ item }}号</li>
    </ul>
    <button @click="clickTap">派发事件</button>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
/* 如果使用的不是Ts 
defineProps({
    title:{
        default:"",
        type:string
    },
    data:Array
}) */
type Props = {
    title: string,
    data: number[]
}
const myList = {
    name: 'child'
}
/* // withDefaults是个函数也是无须引入开箱即用接受一个props函数第二个参数是一个对象设置默认值 */
withDefaults(defineProps<Props>(), {
    title: '获取失败',
    data: () => [0, 0, 0, 0]
})

const emit = defineEmits(['on-click'])
const clickTap = () => {
    emit('on-click', 'child')
}
defineExpose({
    myList
})
</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>