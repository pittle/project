<template>

    <div class="recomment">
        <div class="recomment-title">
            热销推荐
        </div>
        <ul>
            <li class="recomment-item" v-for='recomment in recommentList' :key='recomment[1].title'>
                <div class="item-img-wrap">
                    <img :src="recomment[0]" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ recomment[1].title }}</p>
                    <p class="item-desc">{{ recomment[1].des }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name:'HomeRecomment',
    data(){
        return {
            recommentList:[
                [require('@/assets/img/dec_1.jpg'),{title:'长隆水上乐园',des:'全球必去的水上乐园'}],
                [require('@/assets/img/dec_2.jpg'),{title:'古龙峡玻璃大峡谷',des:'集合玻璃平台、栈道、索桥为的观光玻璃组合'}],
                [require('@/assets/img/dec_3.jpg'),{title:'长隆野生动物世界',des:'奇妙的朋友与您共享欢乐时光'}],
                [require('@/assets/img/dec_4.jpg'),{title:'古龙峡漂流',des:'广东漂流看清远，清远漂流看古龙'}]]
        }
    }
}
</script>

<style scoped lang='stylus'>
    @import '~styles/mixin.styl'
    .recomment-title
        line-height :.8rem
        background :#eee
        text-indent :.2rem
        margin-top:5px
    .recomment-item
        display :flex
        height:1.9rem
        overflow :hidden
        box-sizing :border-box
        padding-top:10px
        padding-bottom:10px
        border-bottom :1px solid #ccc
        .item-img-wrap
            float:left
            padding-left :.1rem
            width :120px
            height :60px;
            .item-img 
                width:100%
        .item-info
            margin-left :12px;
            position :relative
            .item-title
                font-size :16px
                font-weight :bold
                padding-bottom:5px
            .item-desc
                font-size :14px
                color:#555
                width :200px;
                ellipsis();
            .item-button
                border:none
                outline :none
                background :#ff9300
                color:#fff
                border-radius :4px
                position :absolute
                left :0
                bottom:0
                
                


        
</style>