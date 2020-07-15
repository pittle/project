<template>

    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="header-img" src="https://img1.qunarzz.com/travel/d5/1807/f7/4b6cfebbd2f794b5.jpg_r_1360x1360x95_6d5ce953.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    大连圣亚海洋世界(AAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe632;</span>
                    39
                </div>
            </div>
        </div>
       
       <fade-animation>
            <common-gallary 
            v-show="ShowGallery"
            @close='handleGallaryClose'
            ></common-gallary>
       </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
    name:'DetailBanner',
    data(){
        return {
            ShowGallery:false,
        }
    },
    methods:{
        handleBannerClick(){
            this.ShowGallery = true;
        },
        handleGallaryClose(){
            this.ShowGallery = false;
        }
    },
    components:{
        CommonGallary,
        FadeAnimation
    }
}
</script>

<style scoped lang='stylus'>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .header-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color:#fff
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                margin-top .14rem
                padding 0 .32rem
                line-height .32rem
                height .32rem
                border-radius .2rem
                background rgba(0,0,0,.8)
                font-size .24rem
                .banner-icon
                    font-size .24rem

</style>