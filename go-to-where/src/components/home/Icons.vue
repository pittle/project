<template>

    <div class="icons" >
        <div class="icon" v-for="icon in iconList" :key='icon[1]'>
             <div class="icon-img">
                <img class="icon-img-con" :src="icon[0]" alt="">
             </div>
             <p class="icon-des">{{ icon[1] }}</p>
        </div>
    </div>

</template>

<script>
export default {
    name:'HomeIcons',
    data(){
        return {
            iconList:[
                [require('@/assets/img/icon_1.png'),'酒店'],
                [require('@/assets/img/icon_2.png'),'机票'],
                [require('@/assets/img/icon_3.png'),'火车票'],
                [require('@/assets/img/icon_4.png'),'度假'],
                [require('@/assets/img/icon_5.png'),'景点门票'],
                [require('@/assets/img/icon_6.png'),'海外酒店'],
                [require('@/assets/img/icon_7.png'),'低价机票'],
                [require('@/assets/img/icon_8.png'),'汽车票船票'],
                [require('@/assets/img/icon_9.png'),'自由行'],
                [require('@/assets/img/icon_10.png'),'攻略'],
                ]
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl';
    .icons
        overflow:hidden
        height : 0
        padding-bottom :40%
        .icon
            position:relative
            overflow:hidden
            float:left
            width :20%
            padding-bottom :20%
            .icon-img
                position:absolute
                top:0
                left:0
                right:0
                bottom:.44rem
                box-sizing :border-box
                padding:.1rem
                .icon-img-con
                    display:block
                    height:100%
                    margin:0 auto
            .icon-des
                    position:absolute 
                    left :0
                    right:0
                    bottom:0
                    height 0.44rem
                    line-height :.44rem
                    text-align :center
                    color:$darkTextColor 
                   
            

</style>