<style scoped>

</style>
<template>
    <div>
       <ul>
           <li v-for="(value, index) in girls">{{ index }} - {{ value.name }} - {{ value.age }} <button @click="noticeGroup(value.name,value.age)">发送消息</button></li> 
       </ul>
       <div>》接收来自大群的消息: {{ noticeGirl }}</div>
    </div>
</template>
<script>
export default {
    name: 'girl-group',
    props: {
        girls: {
            type: Array,
            required: true
        },
        noticeGirl: {
            type: String,
            required: false
        }
    },
    methods: {
        noticeGroup (name, age) {
            this.$emit('introduce',{
                name: name,
                age: age
            })
        }
    }
}
</script>