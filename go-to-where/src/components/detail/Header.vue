<template>

    <div>
        <router-link tag='div' class="header-abs" to='/' v-show="showAbs">
             <div class="iconfont abs-back-icon">&#xe624;</div>
        </router-link>
        <div class="header-fix" 
        v-show="!showAbs"
        :style="opacityStyle"
        >
            <router-link to='/' tag='div'>
                景点详情
                <div class="iconfont header-fix-back">&#xe624;</div>
            </router-link>
        </div>
    </div>

</template>

<script>


export default {
    name:'DetailHeader',
    data(){
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(e){
            // console.log(document.documentElement.scrollTop);
            const top = document.documentElement.scrollTop;
            if(top > 60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {opacity}
                this.showAbs = false;
            }else{
                this.showAbs = true;
            }
        }
    },
    activated(){     
        window.addEventListener('scroll',this.handleScroll);
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll);
    }
}
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'

    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        text-align center
        background rgba(0,0,0,.8)
        .abs-back-icon
            color:#fff
            font-weight bold
    .header-fix
        z-index 2
        position fixed
        top 0
        left 0
        right 0
        height: $headerHeight
        line-height :$headerHeight
        text-align :center
        overflow :hidden
        color:#fff
        background:$bgColor
        font-size :.32rem
        .header-fix-back
            position absolute
            left 0
            top 0
            width :.64rem
            text-align :center
            font-size :.4rem
            color:#fff
</style>