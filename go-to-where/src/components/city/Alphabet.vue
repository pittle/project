<template>

    <ul class="list">
        <li class="item">1</li>
        <li class="item">2</li>
        <li class="item">3</li>
        <li class="item">4</li>
        <li class="item">5</li>
        <li class="item">6</li>
        <li class="item">7</li>
        <li class="item">8</li>
        <li class="item">9</li>
        <li class="item">10</li>
    </ul>

</template>

<script>
export default {
    
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
