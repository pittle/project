<template>

    <div>
         <detail-banner></detail-banner>
         <detail-header></detail-header>
         <div class="content">
             <detail-list :list='list'></detail-list>
         </div>
    </div>

</template>

<script>
import DetailBanner from '@/components/detail/Banner.vue'
import DetailHeader from '@/components/detail/Header.vue'
import DetailList from '@/components/detail/List.vue'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            list:[{
                title:'成人票',
                children:[{
                    title:'成人三人票'
                },{
                    title:'成人四人票'
                }]
            },{
                title:'学生票'
            },{
                title:'儿童票'
            },{
                title:'其他票'
            }]
        }
    }
}
</script>

<style scoped lang='stylus'>
    .content
        height 50rem
</style>