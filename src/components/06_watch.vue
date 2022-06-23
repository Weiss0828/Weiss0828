<!-- html结构 -->
<template>
    <div>
        {{ msg.nav.bar.name }}
        <button @click="change">change</button>
    </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
/* 
watch 需要侦听特定的数据源，并在单独的回调函数中执行副作用
watch第一个参数监听源
watch第二个参数回调函数cb（newVal,oldVal）
watch第三个参数一个options配置项是一个对象{
immediate:true //是否立即调用一次
deep:true //是否开启深度监听 
*/
let msg = reactive({
    nav: {
        bar: {
            name: 0
        }
    }
})
let msg2 = ref("456")
// 使用reactive监听深层对象开启和不开启deep 效果一样  
// 当监听多个属性 注意变成数组啦
watch([() => msg.nav.bar.name, msg2], (newVal, oldVal) => {
    console.log(newVal, oldVal);
}, {
    deep: true //没用
})
const change = () => {
    msg.nav.bar.name++
}
</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>