<template>

    <div>
         <detail-banner></detail-banner>
         <detail-header></detail-header>
         <div class="content"></div>
    </div>

</template>

<script>
import DetailBanner from '@/components/detail/Banner.vue'
import DetailHeader from '@/components/detail/Header.vue'

export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader
    }
}
</script>

<style scoped lang='stylus'>
    .content
        height 50rem
</style>