<template>

<div>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in bannerList" :key='item.id'>
            <img :src="item.poster" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

export default {
    name:'Demo',
    data(){
        return {
            bannerList:[],
            swiperOptions: {
                pagination: '.swiper-pagination'
            }
        }
    },
    mounted(){
        axios.get('https://developer.duyiedu.com/vue/bz/banner').then((res) => {
                    if(res.status == 200){
                        this.bannerList = [...res.data.data];
                        console.log(this.bannerList);
                    }
        });
    }
}
</script>

<style scoped>

</style>