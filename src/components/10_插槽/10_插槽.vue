<!-- html结构 -->
<template>
    <cc>
        <template #header>
            我是name="header"
        </template>
        <h1 class="我是默认的位置">我是插槽内容</h1>
        <!-- 插槽是可以是变量的  可以通过绑定值来切换 -->
        <template #[f]>
            我是name="footer"
        </template>
    </cc>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import cc from './10_插槽/插槽.vue'
const f = 'footer'
</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>