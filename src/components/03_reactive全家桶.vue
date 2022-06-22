<!-- html结构 -->
<template>
    <div>
        {{ person.name }}
    </div>
    <p>{{ nums }}</p>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue';
// reactive 用来绑定复杂的数据类型 例如 对象 数组
// let x = reactive(123) 他是不可以绑定普通的数据类型这样是不允许 会给我们报错
let person = reactive({
    name: 'wss'
})
// let nums = reactive<number[]>([1, 2, 3, 4])
let nums = reactive({ list: [1, 2, 3, 4] })

const copy = readonly(nums)  //更新为只读属性不能修改
console.log(nums);

setTimeout(() => {
    //这样修改数据会丢失响应式 nums = [4, 5, 6, 4, 8]
    /* 
      正确修改  1. nums.push(...[7, 8, 9])  使用push 等数组方法
               2. 包裹一层对象
    */
    nums.list = [4, 5, 6, 4, 8]
    console.log(nums);
}, 1000)

let data = shallowReactive({
    // 只能对浅层的数据 如果是深层的数据只会改变值 不会改变视图
    name: 'zs',
    a: {
        b: {
            c: 123
        }
    }
})
</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>