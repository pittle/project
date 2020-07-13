<template>

    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recomment></home-recomment>
        <home-weekend></home-weekend>
    </div>

</template>

<script>
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
import HomeRecomment from '@/components/home/Recomment.vue'
import HomeWeekend from '@/components/home/Weekend.vue'
import axios from 'axios'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecomment,
        HomeWeekend
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json').then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res){
            console.log(res);
        }
    },
    mounted(){
        this.getHomeInfo();
    }
}
</script>

<style scoped>

</style>