<style scoped>

</style>
<template>
    <div>
        <p>》群消息girl：</p>
        <div>
            {{ somebody }} 说: 我 {{ age }} 了。
        </div>
        <hr>
        <v-girl-group 
                :girls="aGirls" 
                :noticeGirl="noticeGirl"
                @introduce="introduceSelf"></v-girl-group>
    </div>
</template>
<script>
import vGirlGroup from './GirlGroup'

export default {
    name: 'girl',
    components: {
        vGirlGroup
    },
    data () {
        return {
            aGirls:[{
                name:'小丽',
                age:22
            },{
                name:'小美',
                age:21
            },{
                name:'小荷',
                age:24
            }],
            somebody:'',
            age:'',
            noticeGirl:''
        }
    },
    methods: {
        introduceSelf (opt) {
            this.somebody = opt.name;
            this.age = opt.age;

            // 通知girl收到消息
            this.noticeGirl = opt.name + ',已收到消息';
        }
    }
}

</script>