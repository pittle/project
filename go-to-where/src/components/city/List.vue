<template>

    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前位置</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            {{ this.city }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                    v-for="hot in hotCities" 
                    :key="hot.id"
                    @click="handleCityClick(hot.name)"
                    >
                        <div class="button">{{ hot.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" 
            v-for="(item,key) in cities" 
            :key="key"
            :ref='key'>
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list" 
                v-for="innerItem in item" 
                :key="innerItem.name"
                 @click="handleCityClick(innerItem.name)"
                >
                    <div class="item border-bottom">{{ innerItem.name }}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import BScoll from 'better-scroll'
import { mapState } from 'vuex'
export default {
    name:'CityList',
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity',city);
            this.$router.push('/');
        }
    },
    mounted(){
        this.scroll = new BScoll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                // console.log(this.$refs[this.letter]);//[div.area]
                const element = this.$refs[this.letter][0];
                this.scroll.scrollToElement(element);
            }
        }
    }
}
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #ccc
        &:after 
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
        &:after 
            border-color #ccc
    .list
        overflow hidden
        position absolute
        left 0
        right 0
        bottom 0
        top 1.58rem
        .title
            line-height .54rem
            background :#eee
            padding-left .2rem
            color #666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left 
                width 33.33%
                .button 
                    border .02rem solid #ccc;
                    padding .1rem 0
                    border-radius .06rem
                    text-align center
                    margin .1rem
        .item-list
            .item
                line-height .76rem
                color #666
                padding-left .2rem
               
</style>