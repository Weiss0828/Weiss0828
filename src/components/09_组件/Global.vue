<!-- html结构 -->
<template>
    <div class="box">
        <A></A>
        <B></B>
    </div>
    <!-- 动态组件用于切换组件 -->
    <div>
        <component :is="flag ? A : B"></component>
        <button @click="flag = !flag">切换</button>
    </div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import A from './A.vue'
import B from './B.vue'
const flag = shallowRef(false)
</script>

<!-- 样式设置 -->
<style scoped>
.box {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 200px;
    background-color: royalblue;
    border-radius: 12px;
}
</style>