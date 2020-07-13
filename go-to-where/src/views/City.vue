<template>

    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>

</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/CitySearch.vue'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch
    }
}
</script>

<style scoped lang='stylus'>

</style>