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

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecomment,
        HomeWeekend
    }
}
</script>

<style scoped>

</style>