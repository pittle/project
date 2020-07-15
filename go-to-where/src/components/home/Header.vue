<template>

<div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
        <div class="header-right">
            {{ this.city }}
        <span class="iconfont city-icon">&#xe64a;</span>
        </div>
    </router-link>
</div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'HomeHeader',
    data(){
        return {}
    },
    computed:{
        ...mapState(['city'])
    }
}
</script>

<style lang='stylus' scoped>
 
@import "~@/assets/styles/varibles.styl"
.header
    line-height:$headerHeight
    display:flex; 
    background:$bgColor
    color:#fff;
    .header-left
        width :.64 rem;
        float:left;
        .back-icon
            text-align :center
    .header-input
        flex:1;
        background:#fff
        padding-left :.2rem
        border-radius :5px
        margin-top:.12rem
        margin-left :.2rem
        height :.64rem
        line-height :.64rem
        color:#ccc
    .header-right
        min-width 1.04rem
        padding 0 .1rem
        float:right;
        text-align :center
        color:#fff
        .city-icon
            margin-left:-0.04rem
            font-size :.24rem
</style>