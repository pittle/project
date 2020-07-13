<template>

    <ul class="list">
        <li class="item" v-for="(item,key) in cities" :key='key'>
            {{ key }}
        </li>
    </ul>

</template>

<script>
export default {
    name:'cityAlphabet',
    props:{
        cities:Object
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
