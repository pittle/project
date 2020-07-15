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
// import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
import HomeRecomment from '@/components/home/Recomment.vue'
import HomeWeekend from '@/components/home/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name:'Home',
    components:{
        HomeHeader:import('@/components/home/Header.vue'),
        HomeSwiper,
        HomeIcons,
        HomeRecomment,
        HomeWeekend
    },
    data:{
        lastCity:''
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res){
            // console.log(res);
        }
    },
    mounted(){
        this.lastCity = this.city;
        // this.getHomeInfo();
    },
    activated(){
        //判断城市是否改变，如果改变就必须改变首页
        if(this.lastCity != this.city){
            this.lastCity = this.city;
            // this.getHomeInfo();
        }
    }
}
</script>

<style scoped>

</style>