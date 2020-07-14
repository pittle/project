# go-to-where

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 项目细节说明
index.html 为首页模板文件

assets/reset.css 设置初始化样式

assets/border.css 解决移动端1px在多倍屏幕上物理像素超过1px的问题
css样式中border:1px solid red;在2倍屏下,显示的并不是1个物理像素,而是2个物理像素。为了解决这个问题,引入border.css是非常有必要的。

移动端某些机型上click 300ms点击延迟问题 需要导入一个js包
 cnpm install fastclick --save
import fastClick from 'fastclick'
fastClick.attach(document.body);

需要安装的包
cnpm install stylus --save
cnpm install stylus-loader --save

1rem = html的font-size = 50px(设置reset.css里的html设置为50px)

引入stylus变量时@符号前面要加~
@import "~@/assets/styles/varibles.styl"

设置路径别名build/webpack.base.conf.js
注意：修改配置文件需要重新启动服务
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles':resolve('src/assets/styles')
    }
  },

本地创建分支push到远程
git branch index-swiper
git checkout index-swiper
git push origin index-swiper

/Desktop/git-practice/project/go-to-where (index-swiper)
$ git add .
git commit -m 'swiper'
git push origin index-swiper  //push到远程index-swiper
git checkout master           //切换到master分支 
git merge origin/index-swiper //把线上的index-swiper合并到本地master分支
git push  //push本地master到到远程


- 远程创建分支拉到本地
git pull
git checkout index-swiper

- 轮播图插件在git上搜索vue-awesome-swiper
> https://github.com/surmon-china/vue-awesome-swiper
cnpm install vue-awesome-swiper@2.6.7 --save

- ajax
浏览器自带fetch请求数据
vue-resource
axios(功能非常强大,vue推荐使用。浏览器上可以发送xhr请求,node服务器中发送http请求)
- 注意：ajax的请求一般放到最外层的组件,这样只需要一次ajax就可以获得页面上所有内容

- static目录下为静态文件,使用localhost:8080/static/mock/index.json可以在网页上直接访问到这个文件夹里面的内容,其他文件像src文件夹网页就访问不到


- 配置config/index.js 
```js
proxyTable: {
      '/api':{
        target:'http://localhost:8080', //目标服务器地址
        pathRewrite:{              //以api开头的访问路径替换成/static/mock
          '^/api':'/static/mock'
        }
      }
    }
//此功能由webpack-dev-server提供
```

- better-scroll插件
import BScoll from 'better-scroll'
- 滚动元素到指定区域
```js
 mounted(){
        this.scroll = new BScoll(this.$refs.wrapper)
}
this.scroll.scrollToElement(element); 
```
- v-for循环对象的时候
```js
v-for="(item,key) in cities" :key="key" //key为对象属性名 item为属性名对应的属性值
```

- 兄弟组件的传值Alphabet,List
- City为父组件   Alphabet,List为子组件
- Alphabet 传值给 City 再传值 给List

