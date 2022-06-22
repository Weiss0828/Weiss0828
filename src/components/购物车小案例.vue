<!-- html结构 -->
<template>
    <table>
        <tr>
            <th>品牌</th>
            <th>数量</th>
            <th>单价</th>
            <th>操作</th>
        </tr>
        <tr v-for="item in data" key="item.name">
            <td>{{ item.name }}</td>
            <td>
                <button @click="addOrminus(item.name, 'minus')" style="width: 30px;">-</button>
                <span style="margin:0 12px">{{ item.num }}</span>
                <button @click="addOrminus(item.name, 'add')" style="width: 30px;">+</button>
            </td>
            <td>{{ item.price }}</td>
            <td><button @click="del(item.name)">删除</button></td>
        </tr>
        <tr>
            <td>一共:</td>
            <td>{{ totalNum }}</td>
            <td>合计:</td>
            <td>{{ totalPrice }}</td>
        </tr>
    </table>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import { computed, reactive } from 'vue';
type Shop = {
    name: string,
    num: number,
    price: number
}
let data = reactive<Shop[]>([
    {
        name: "小满的袜子",
        num: 1,
        price: 100
    },
    {
        name: "小满的裤子",
        num: 1,
        price: 200
    },
    {
        name: "小满的衣服",
        num: 1,
        price: 300
    },
    {
        name: "小满的毛巾",
        num: 1,
        price: 400
    }
])
const addOrminus = (name: string, state: 'add' | 'minus') => {
    if (state === 'add') {
        data = data.map(v => {
            if (v.name === name && v.num < 100) {
                v.num++
            }
            return v
        })
    } else {
        data = data.map(v => {
            if (v.name === name && v.num > 0) {
                v.num--
            }
            return v
        })
    }
}
let totalNum = computed(() => {
    return data.reduce((pre, next) => {
        return pre + next.num
    }, 0)
})
let totalPrice = computed(() => {
    return data.reduce((pre, next) => {
        return pre + (next.num * next.price)
    }, 0)
})

const del = (name: string) => {
    const index = data.findIndex((item) => item.name === name)
    data.splice(index, 1)
}



</script>

<!-- 样式设置 -->
<style scoped>
table,
tr,
th,
td {
    border: 1px solid black;
}

td {
    width: 120px;
    text-align: center;
}

button {
    cursor: pointer;
}
</style>