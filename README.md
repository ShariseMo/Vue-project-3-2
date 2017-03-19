# vue-2017-3-2

> A Vue.js project

## Build Setup

### install

```bash
# 安装
SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ cnpm install node-sass
cnpm i

```

### 开发模式

```bash

npm run dev

```

### 生成正式代码

```bash

npm run build

```


## review

- sass-loader 应该作为 devDependencies 来安装，只在开发时候作为编译scss工具，正式环境不需要.
- assets/js/public.js 不需要自执行函数包裹，我们是按照 cmd 模块加载来的，它会在编译时候自动加上一个自执行函数。
- components 放置你自定义的组件 .vue
- pages 放置.vue 页面级别的单文件
- 移动端可以引入 flex.scss,用flex布局 [flex.scss github地址](https://github.com/mastastealth/sass-flex-mixin/blob/master/_flex.scss)
- scss [文档](http://sass-lang.com/guide)
<!--- assets 应该是主要放置 全局-->


## 目录

```bash

├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── index.html
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   └── img
│   ├── components
│   │   ├── Hello.vue
│   │   ├── Nav.vue
│   │   └── Search.vue
│   ├── main.js
│   ├── pages
│   │   ├── Banner.vue
│   │   ├── Home.vue
│   │   ├── Login.vue
│   │   └── layouts.vue
│   ├── router
│   │   └── index.js
│   └── styles
│       ├── _common.scss
│       ├── _flex.scss
│       ├── _mixins.scss
│       └── index.scss
└── static

```
