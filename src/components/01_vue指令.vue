<!-- html结构 -->
<template>
  {{ msg.split(',') }}

  <div v-for="item in msg.split(',')">
    <p v-if="item !== '我不是'">
      {{ item }}
    </p>
    <h2 v-else style="color: red ;">
      {{ item }}
    </h2>
  </div>
  <div v-html="h1"></div>
  <div class="box" @click="change2">
    <button @click="change">切换事件</button>
  </div>
  <input type="text" @change="change" v-model="x">
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
let msg: string = '我不是,魏生生'
const h1 = '<h1>我是魏生生</h1>'
const change = () => {
  console.log(msg);
}
const change2 = () => {
  console.log(h1);
}
let x = '456'
</script>

<!-- 样式设置 -->
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: antiquewhite;
}
</style>