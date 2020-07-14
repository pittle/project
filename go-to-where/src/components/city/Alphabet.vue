<template>

    <ul class="list">
        <li class="item" 
        v-for="item in letters" 
        :key='item'
        :ref='item'
        @click='handleLetterClick'
        @touchstart='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
        >
            {{ item }}
        </li>
    </ul>

</template>

<script>
export default {
    name:'cityAlphabet',
    props:{
        cities:Object
    },
    data(){
        return {
            touchStatus:false,
            startY : 0,
            timer:null
        }
    },
    computed:{
        letters(){
            const letters = []
            for(let item in this.cities){
                letters.push(item);
            }
            return letters;
        }
    },
    updated(){//父组件ajax请求数据,导致子组件数据更改,DOM重新渲染后触发
         this.startY = this.$refs['A'][0].offsetTop; 
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText);
        },
        handleTouchStart(){
            this.touchStatus = true;
        },
        handleTouchMove(e){
            if(this.touchStatus){
                //函数节流
                if(this.timer){
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    // A字母到蓝色区域的高度
                    //  const startY = this.$refs['A'][0].offsetTop; 
                    // 字母到整个屏幕顶部
                    const touchY = e.touches[0].clientY;
                    //79px为整个蓝色区域的高度
                    const index = Math.floor((touchY - this.startY - 79)/ 20);
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index]);
                    }
                },16)
                 
            }
        },
        handleTouchEnd(){   
            this.touchStatus = false;

        }
    }
}
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'
   .list
        position absolute
        top 1.58rem
        bottom 0
        right 0
        width .4rem
        display flex
        flex-direction column
        justify-content center
        .item
            line-height .4rem
            text-align center
            color $bgColor

</style>
