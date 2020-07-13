<template>

    <div>
        <div class="week-title">
            周末去哪儿
        </div>
        <ul>
            <li class="week-item" v-for='recomment in recommentList' :key='recomment[1].title'>
                <div class="item-img-wrap">
                    <img :src="recomment[0]" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ recomment[1].title }}</p>
                    <p class="item-desc">{{ recomment[1].des }}</p>
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
    .week-title
        line-height :.8rem
        background :#eee
        text-indent :.2rem
    .week-item
        overflow :hidden
        box-sizing :border-box
        margin-bottom:10px
        .item-img-wrap
            width :100%
            height :120px;
            .item-img 
                width:100%
                height:100%
        .item-info
            margin-left :5px;
            .item-title
                font-size :16px
                font-weight :bold
                padding-bottom:5px
            .item-desc
                font-size :14px
                color:#555
                width :200px;
                ellipsis();
            
                
                


        
</style>