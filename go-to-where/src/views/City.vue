<template>

    <div>
        <city-header></city-header>
        <city-search
        :cities='cities'></city-search>
        <city-list 
        :cities='cities' 
        :hotCities='hotCities'
        :letter='letter'
        ></city-list>
        <city-alphabet 
        :cities='cities'
        @change='handleLetterChange'
        ></city-alphabet>
    </div>

</template>

<script>
import CityHeader from '@/components/city/Header.vue'
import CitySearch from '@/components/city/CitySearch.vue'
import CityList from '@/components/city/List.vue'
import CityAlphabet from '@/components/city/Alphabet.vue'
import axios from 'axios'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:null,
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(this.handleGetCity);
        },
        handleGetCity(res){
            res = res.data
            // console.log(res);
            if(res.ret && res.data){
                const data = res.data;
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            }
        },
        handleLetterChange(letter){
            this.letter = letter
        },
       
    },
    mounted(){
        this.getCityInfo();
    }
}
</script>

<style scoped lang='stylus'>

</style>