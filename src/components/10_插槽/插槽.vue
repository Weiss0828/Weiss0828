<!-- html结构 -->
<template>
    <div>
        <slot name="header"></slot>
        <div>
            我是内部内容
        </div>
        <slot></slot>
        <slot name="footer"></slot>

    </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">

</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>