<!-- html结构 -->
<template>
    <div>
        <h1>{{ msg1 }}</h1>
        <p>{{ msg2 }}</p>
        <p>{{ msg3.count }}</p>
        <button @click="change">改变值</button>
    </div>

</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { customRef, isRef, Ref, ref, shallowRef, triggerRef } from "vue"
/* 通过ref创建响应式对象 */
let msg1 = ref<string>('sss')
let msg2: Ref<number | number> = ref(456)
/* shallowRef使里面的属性不为响应式，外部是响应式的 */
let msg3 = shallowRef({ count: 333 })
const change = () => {
    //这样子修改shallowRef是不会更新页面的想要更新页面 msg3.value = { count: 44 } 
    //外层是响应式 内部属性不是响应式但值是改变的
    msg3.value.count++
    /* 通过isRef来判断是否是响应式对象 */
    console.log(isRef(msg2));
    //强制更新Dom元素  triggerRef(msg3)
}
/* 自定义Ref */
function myRef<T>(value: T) {
    return customRef((track, trigger) => {
        return {
            get() {
                track()  //通知vue监听value变化
                return value
            },
            set(newVal: T) {
                console.log('set');
                value = newVal
                trigger()   //重新解析模板
            }
        }
    })
}
let x = myRef(33)
x.value = 44
</script>

<!-- 样式设置 -->
<style scoped lang="less">
</style>