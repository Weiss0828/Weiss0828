<!-- html结构 -->
<template>
    <div>
        {{ state }}
    </div>
    <button @click="change">change</button>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { reactive, toRaw, toRef, toRefs } from 'vue';

// toRef  如果原始对象是非响应式的就不会更新视图 数据是会变的
const obj = {
    foo: 1,
    bar: 1
}
let state = toRef(obj, 'bar')
// bar 转化为响应式对象
const change = () => {
    state.value++  //原始数据也会更改,
    console.log(obj, state);
}
const obj2 = reactive({
    name: 'lj',
    age: 22
})
let { name, age } = toRefs(obj2)
console.log('toRefs(obj2)', name, age);  //toRefs可以帮我们批量创建ref对象主要是方便我们解构使用

let obj3 = toRaw(obj2) // 响应式对象转化为普通对象
console.log('obj2', obj2);

</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>