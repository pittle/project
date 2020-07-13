<template>

   <div class="search">
       <input class="search-input" type="text" placeholder="输入城市名或拼音">
   </div>

</template>

<script>

export default {
    name:'CitySearch'
}
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl'

.search
    height .72rem
    background $bgColor
    padding:0 .1rem
    .search-input 
        box-sizing border-box
        width 100%
        padding 0 .1rem
        height .62rem
        line-height .62rem
        text-align center
        border-radius .06rem
        outline none
        border none
        color #666
    
</style>