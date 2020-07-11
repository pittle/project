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