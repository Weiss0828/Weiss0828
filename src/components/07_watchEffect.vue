<!-- html结构 -->
<template>

</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { ref, watchEffect } from 'vue';

/* watchEffect
立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。
如果用到message 就只会监听message 就是用到几个监听几个 而且是非惰性 会默认调用一次
 */
let msg1 = ref(1)
let msg2 = ref('1')
watchEffect(() => {
    console.log(msg2.value);
})
/* 清除副作用
就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖 */
watchEffect((oninvalidate) => {
    oninvalidate(() => {
        // 里面可以用来防抖
    })
    console.log(msg1.value);
})


</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>