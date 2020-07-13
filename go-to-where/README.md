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

# 项目说明
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
git push  //push本地master到远程


远程创建分支拉到本地
git pull
git checkout index-swiper



- 轮播图插件在git上搜索vue-awesome-swiper
> https://github.com/surmon-china/vue-awesome-swiper
cnpm install vue-awesome-swiper@2.6.7 --save
