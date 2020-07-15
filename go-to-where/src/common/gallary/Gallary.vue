<template>

    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="item in bannerList" :key='item.id'>
                    <img class="img-src" :src="item.poster" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

export default {
    name:'CommonGallary',
    data(){
        return {
            bannerList:[],
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType:'fraction',
                observeParents:true, //监听父元素发现变化刷新页面
                observer:true        //监听当前元素发生变化刷新页面
            }
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close');
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

<style scoped lang='stylus'> 
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            width 100%
            height 0
            padding-bottom 100%
            background #fff
            .img-src
                width 100%
                height 100% vw
            .swiper-pagination
                color:#fff
                bottom:-1rem
            
</style>