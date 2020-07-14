<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div 
    class="search-content" 
    ref="searchContent"
    v-show='keyword'
    >
      <ul>
        <li 
        class="search-item border-bottom" 
        v-for="item in list" 
        :key='item.name'
        @click="handleCityClick(item.name)"
        >{{ item.name }}</li>
        <li class="search-item border-bottom" v-show='hasNoData'>
            没有匹配到数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScoll from 'better-scroll'

export default {
  name: "CitySearch",
  props:{
      cities:Object
  },
  data(){
      return {
          keyword:'',
          list:[],
          timer:null
      }
  },
  computed:{
      hasNoData(){
          return !this.list.length;
      }
  },
  methods:{
      handleCityClick(city){
            this.$store.commit('changeCity',city);
            this.$router.push('/');
    }
  },
  watch:{
      keyword(){
          if(this.timer){
              clearTimeout(this.timer);
          }
          if(!this.keyword){
              this.list = [];
              return;
          }
          this.timer = setTimeout(() => {
              const result = [];
              for(let i in this.cities){
                  this.cities[i].forEach((ele) => {
                      if(ele.spell.indexOf(this.keyword) > -1 || ele.name.indexOf(this.keyword) > -1){
                            result.push(ele);
                      }
                  });
              }
              this.list = result;
          },100);
      }
  },
  mounted(){
      this.scroll = new BScoll(this.$refs.searchContent);
  }
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.search 
  height: 0.72rem;
  background: $bgColor;
  padding: 0 0.1rem;
  .search-input 
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.1rem;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    outline: none;
    border: none;
    color: #666;
.search-content
    z-index:1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom:0
    background #ccc
    .search-item
        line-height .62rem
        padding-left .2rem
        color #666
        background #fff
</style>