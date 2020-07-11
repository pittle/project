 <template >
            <div class="banner-box">
                <ul class="banner-list"
                    :style="bannerStyle"
                    @transitionend = "handleTransitionEnd"                
                >
                    <li class="banner" v-for="banner in bannerList" :key='banner.id'>
                        <img :src="banner" alt="banner">
                    </li>
                </ul>
                <ul class="index-list" v-if="bannerList.length">
                    <li 
                    v-for="index in bannerList.length - 1"
                    :key="index"
                    class="index"
                    :class="{
                        active: index - 1 === bannerActiveIndex % 3
                    }"
                    ></li>
                </ul>
            </div>
</template>

<script>
      export default{
          name:'HomeSwiper',
          data(){
            return {
                bannerList:[require('@/assets/img/banner_1.jpg'),
                require('@/assets/img/banner_2.jpg'),
                require('@/assets/img/banner_3.jpg'),
                require('@/assets/img/banner_1.jpg')],
                bannerWidth:375,
                bannerStyle:{
                    left:0,
                },
                bannerActiveIndex:0,
            }
          },
          methods:{
            handleNavActive(index){
                    this.navActiveIndex = index
                },
                autoMove(){
                    setTimeout(() => {
                        if(this.bannerActiveIndex === 0 ) {
                            this.bannerStyle.transition = 'left .3s';
                        }
                        this.bannerActiveIndex ++;
                        this.bannerStyle.left = - this.bannerWidth * this.bannerActiveIndex + 'px';
                    },1500)
                },
                handleTransitionEnd(){
                    if(this.bannerActiveIndex == 3){
                        this.bannerActiveIndex = 0;
                        this.bannerStyle.left = 0; 
                       this.bannerStyle.transition = 'none';
                    } 
                    this.autoMove();                   
                }
          },
          created(){
           
          },
          mounted(){
                this.autoMove();
            }
      }
</script>

<style scoped>
.banner-box{
    /* 相对于文档定位 */
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 375px;
    height: 110px;
    overflow: hidden;
}

.banner-box .banner-list{
    width: calc(375px * 4);
    position: absolute;
    left: 0;
    /* transition: left 1s; */
}

.banner-box .banner-list .banner{
    width: 375px;
    height: 110px;
    float: left;
}
.banner-box .banner-list .banner img{
    width: 100%;
    height: 100%;
}

.banner-box .index-list{
    position: absolute;
    left: 50%;
    bottom:3px;
    transform: translateX(-50%);
    height: 10px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding-left: 3px;
    padding-right: 3px;
    background-color: rgba(0, 0,0,0.5);
}
.banner-box .index{
    margin-left: 3px;
    margin-right: 3px;
    width: 5px;
    height:5px;
    background-color: #fff;
    border-radius: 50%;
}
.banner-box .index.active{
    background-color: #fb7299;
}

</style>
