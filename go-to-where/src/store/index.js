import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//如果用户关闭本地存储(这里进行一个容错)
let defaultCity = '北京';
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch(e){}

export default new Vuex.Store({
   state:{
       city:defaultCity
   },
   actions:{
       
   },
   mutations:{
       changeCity(state,city){
            state.city = city;
            try{
                localStorage.city = city
            }catch(e){}
       }
   }
});