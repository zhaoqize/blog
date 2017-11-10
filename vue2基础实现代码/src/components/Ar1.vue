<style>

</style>
<template>
    
    <div>
       Ar1
    </div>
</template>
<script>

export default {
    name: 'Ar1',
    beforeRouteEnter (to, from, next) {
        console.log('beforeRouteEnter :',arguments)
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log('beforeRouteEnter :',arguments)
        next(true)
    },
    beforeCreate () {
        console.log('beforeCreate')
    },
    created () {
        console.log('created')
    },
    beforeMount () {
        console.log('beforeMount')
    },
    mounted () {
        console.log('mounted')
    },
    beforeDestroy () {
        console.log('beforeDestroy')
    },
    destroyed () {
        console.log('destroyed')
    }
}

</script>