<template>

    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <city-alphabet></city-alphabet>

    </div>

</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/CitySearch.vue'
import CityList from '@/components/city/List.vue'
import CityAlphabet from '@/components/city/Alphabet.vue'

export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    }
}
</script>

<style scoped lang='stylus'>

</style>