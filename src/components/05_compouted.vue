<!-- html结构 -->
<template>
    <div>
        <p>函数形式：{{ m }}</p>
        <p>对象形式：{{ n }}</p>
        <button @click="add">加钱</button>
    </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { computed, ref } from 'vue';
let price = ref<number>(0)
const add = () => {
    price.value++
}
/* 
计算属性就是当依赖的属性的值发生变化的时候，才会触发他的更改，
如果依赖的值，不发生变化的时候，使用的是缓存中的属性值。
*/
//函数形式
let m = computed<string>(() => {
    return '$' + price.value
})
let n = computed({
    get: () => { return '$' + price.value },
    set: () => { }
})
</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>