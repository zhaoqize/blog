<style>
    div{
        font-size: 14px;
    }
</style>
<template>

    <div>
        Ar下有两个嵌套的子路由
        <router-link to="/ar/1?id=1&age=22">子路由一</router-link>
        <router-link to="/ar/2?id=2&age=24">子路由二</router-link>
        <router-view></router-view>
    </div>
</template>
<script>

export default {

}

</script>