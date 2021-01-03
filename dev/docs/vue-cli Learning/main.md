# vue-cli讲解

---

## 什么是vue-cli

* vue-cli是vue脚手架的意思，可以帮我们快速搭建项目
* 通过 @vue/cli 实现的交互式的项目脚手架
* 通过 @vue/cli + @vue/cli-service-global 实现的零配置原型开发

## vue-cli的核心组件

### CLI

* CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue 命令。它可以通过 vue create 快速搭建一个新项目，或者直接通过 vue serve 构建新想法的原型。你也可以通过 vue ui 通过一套图形化界面管理你的所有项目

### CLI服务

* CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm 包，局部安装在每个 @vue/cli 创建的项目中
* CLI 服务是基于webpack跟webpack-dev-server的
* 可以帮助我们实现
  + 加载其它 CLI 插件的核心服务；
  + 一个针对绝大部分应用优化过的内部的 webpack 配置；
  + 项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令

### CLI 插件

* CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如 Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin- (社区插件) 开头，非常容易使用。
* 当你在项目内部运行 vue-cli-service 命令时，它会自动解析并加载 package.json 中列出的所有 CLI 插件

## 安装

* 在node环境下可以使用下面的命令进行安装

``` powershell
    npm install -g @vue/cli
```

## 基础

### 创建一个项目

* 可以运行下面的命令来创建一个项目

``` powershell
    vue create <project name>
```

* 之后vue-cli会一步一步引导你需要安装哪些插件跟服务
* 你也可以使用vue-cli提供的图形化界面来管理你的项目，只需要运行```vue ui```命令即可

### 插件跟一些presets

* vue cli使用的是一个基于插件的架构，如果你阅读package.json文件的话就会发现依赖都是以```@vue/cli-plugin-```开头的插件可以修改 webpack 的内部配置，也可以向 vue-cli-service 注入命令。在项目创建的过程中，绝大部分列出的特性都是通过插件来实现的

### 在现有的项目中安装插件

* 我们只需要使用```vue add eslint```命令来安装插件
* 这个命令将 @vue/eslint 解析为完整的包名 @vue/cli-plugin-eslint，然后从 npm 安装它，调用它的生成器
* 每个 CLI 插件都会包含一个 (用来创建文件的) 生成器和一个 (用来调整 webpack 核心配置和注入命令的) 运行时插件。当你使用 vue create 来创建一个新项目的时候，有些插件会根据你选择的特性被预安装好

### presets

* 一个 Vue CLI preset 是一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们
* 在 vue create 过程中保存的 preset 会被放在你的 home 目录下的一个配置文件中 (~/.vuerc)。你可以通过直接编辑这个文件来调整、添加、删除保存好的 preset
* 下面将给出一个实例

``` json
{
  "useConfigFiles": true,
  "cssPreprocessor": "sass",
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-eslint": {
      "config": "airbnb",
      "lintOn": ["save", "commit"]
    },
    "@vue/cli-plugin-router": {},
    "@vue/cli-plugin-vuex": {}
  }
}
```

## CLI服务

* 当我们安装完成了@vue/cli-service的时候我们就拥有了一个vue-cli-service命令
* 我们可以将这些命令添加在npm命令中
* 下面是package.json文件中的内容

``` json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  }
}
```

* 添加完了可以用npm或者yarn来运行这些命令

### vue-cli-service serve

* 这个命令非常类似于webpack中的serve命令，可以帮我们启动一个开发服务器，并且附带HMR，可以在vue.config.js文件里面访问devServer来进行配置，常见的配置选项有：

``` powershell
用法：vue-cli-service serve [options] [entry]

选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
```

* 具体详情可以在devserver的配置详情里面可以看到

### vue-cli-service build

* vue-cli-service build 会在 dist/ 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里
* 可以传入的参数有：

``` powershell
用法：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
```

* 此命令会在 dist/ 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里

### vue-cli-service inspect

* 使用方法：

``` powershell
用法：vue-cli-service inspect [options] [...paths]

选项：

  --mode    指定环境模式 (默认值：development)
```

* 你可以使用此命令来查看vue cli项目的webpack配置
* 可以使用```npx vue-cli-service help```来查看所有的可以用的命令

## 缓存和并行处理

* cache-loader 会默认为 Vue/Babel/TypeScript 编译开启。文件会缓存在 node_modules/.cache 中——如果你遇到了编译方面的问题，记得先删掉缓存目录之后再试试看
* thread-loader 会在多核 CPU 的机器上为 Babel/TypeScript 转译开启

## 实现浏览器兼容

### browserslist

* 在vue-cli中browserslist将会作为一个单独的文件出现文件名为.browserslistrc或者直接写在package.json里面
* 可以帮助babel或者Autoprefix添加一些css浏览器前缀

### Polyfill

* useBuiltIns: 'usage'
* 一个默认的 Vue CLI 项目会使用 @vue/babel-preset-app，它通过 @babel/preset-env 和 browserslist 配置来决定项目需要的 polyfill
* 如果有依赖需要 polyfill，你有几种选择：

1. 如果该依赖基于一个目标环境不支持的 ES 版本撰写: 将其添加到 vue.config.js 中的 transpileDependencies 选项。这会为该依赖同时开启语法转换和根据使用情况检测 polyfill
2. 如果该依赖交付了 ES5 代码并显式地列出了需要的 polyfill: 你可以使用 @vue/babel-preset-app 的 polyfills 选项预包含所需要的 polyfill。注意 es.promise 将被默认包含，因为现在的库依赖 Promise 是非常普遍的

``` javascript
// babel.config.js
module.exports = {
    presets: [
        ['@vue/app', {
            polyfills: [
                'es.promise',
                'es.symbol'
            ]
        }]
    ]
}
```

3. 如果该依赖交付 ES5 代码，但使用了 ES6+ 特性且没有显式地列出需要的 polyfill (例如 Vuetify)：请使用 useBuiltIns: 'entry' 然后在入口文件添加 import 'core-js/stable'; import 'regenerator-runtime/runtime';。这会根据 browserslist 目标导入所有 polyfill，这样你就不用再担心依赖的 polyfill 问题了，但是因为包含了一些没有用到的 polyfill 所以最终的包大小可能会增加

* 构建库或是 Web Component 时的 Polyfills
* 当使用 Vue CLI 来构建一个库或是 Web Component 时，推荐给 @vue/babel-preset-app 传入 useBuiltIns: false 选项。这能够确保你的库或是组件不包含不必要的 polyfills。通常来说，打包 polyfills 应当是最终使用你的库的应用的责任
* 现代模式
* 如果确定当前的环境支持es的最新规范，我们可以直接使用现代模式，就不会有babel的哪些转化导致开发变慢了

``` powershell
vue-cli-service build --modern
```

## 处理HTML资源跟静态资源

### index 文件

* public/index.html 文件是一个会被 html-webpack-plugin 处理的模板。在构建过程中，资源链接会被自动注入。另外，Vue CLI 也会自动注入 resource hint (preload/prefetch、manifest 和图标链接 (当用到 PWA 插件时) 以及构建过程中处理的 JavaScript 和 CSS 文件的资源链接

### 插值

* 因为 index 文件被用作模板，所以你可以使用 lodash template 语法插入内容：

``` powershell
<%= VALUE %> 用来做不转义插值；
<%- VALUE %> 用来做 HTML 转义插值；
<% expression %> 用来描述 JavaScript 流程控制。
```

* 除了被 html-webpack-plugin 暴露的默认值之外，所有客户端环境变量也可以直接使用。例如，BASE_URL 的用法：

``` html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```

### preload

* ```<link rel="preload">``` 是一种 resource hint，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。
* 默认情况下，一个 Vue CLI 应用会为所有初始化渲染需要的文件自动生成 preload 提示。
* 这些提示会被 @vue/preload-webpack-plugin 注入，并且可以通过 chainWebpack 的 config.plugin('preload') 进行修改和删除。

### Prefetch

* ```<link rel="prefetch">``` 是一种 resource hint，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。
* 默认情况下，一个 Vue CLI 应用会为所有作为 async chunk 生成的 JavaScript 文件 (通过动态 import() 按需 code splitting 的产物) 自动生成 prefetch 提示。
* 这些提示会被 @vue/preload-webpack-plugin 注入，并且可以通过 chainWebpack 的 config.plugin('prefetch') 进行修改和删除。
* 示例：

``` javascript
// vue.config.js
module.exports = {
    chainWebpack: config => {

        // 移除 prefetch 插件
        config.plugins.delete('prefetch')

        // 或者
        // 修改它的选项：
        config.plugin('prefetch').tap(options => {
            options[0].fileBlacklist = options[0].fileBlacklist || []
            options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
            return options
        })

    }
}
```

* 当 prefetch 插件被禁用时，你可以通过 webpack 的内联注释手动选定要提前获取的代码区块：

``` javascript
import( /*webpackPrefetch: true*/ './someAsyncComponent.vue')
```

* webpack 的运行时会在父级区块被加载之后注入 prefetch 链接。

### 不生成 index

* 当基于已有的后端使用 Vue CLI 时，你可能不需要生成 index.html，这样生成的资源可以用于一个服务端渲染的页面。这时可以向 vue.config.js 加入下列代码：

``` javascript
// vue.config.js
module.exports = {

    // 去掉文件名中的 hash
    filenameHashing: false,
    // 删除 HTML 相关的 webpack 插件
    chainWebpack: config => {
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    }

}
```

* 然而这样做并不是很推荐，因为：
  + 硬编码的文件名不利于实现高效率的缓存控制。
  + 硬编码的文件名也无法很好的进行 code-splitting (代码分段)，因为无法用变化的文件名生成额外的 JavaScript 文件。
  + 硬编码的文件名无法在现代模式下工作。
* 你应该考虑换用 indexPath 选项将生成的 HTML 用作一个服务端框架的视图模板

### 构建一个多页应用

* 不是每个应用都需要是一个单页应用。Vue CLI 支持使用 vue.config.js 中的 pages 选项构建一个多页面的应用。构建好的应用将会在不同的入口之间高效共享通用的 chunk 以获得最佳的加载性能

### 处理静态资源

* 静态资源可以通过两种方式进行处理
  + 在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。
  + 放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。

* 从相对路径导入
* 当你在 JavaScript、CSS 或 *.vue 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 ```<img src="...">```、```background: url(...)``` 和``` CSS @import ```的资源 URL 都会被解析为一个模块依赖。
* 例如，```url(./image.png)``` 会被翻译为 ```require('./image.png')```，而```<img src="./image.png">```将会编译到

``` javascript
h('img', {
    attrs: {
        src: require('./image.png')
    }
})
```

* 在其内部，我们通过 file-loader 用版本哈希值和正确的公共基础路径来决定最终的文件路径，再用 url-loader 将小于 4kb 的资源内联，以减少 HTTP 请求的数量
* 你可以通过 chainWebpack 调整内联文件的大小限制。例如，下列代码会将其限制设置为 10kb：

``` javascript
// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {
                limit: 10240
            }))
    }
}
```

### URL 转换规则

* 如果 URL 是一个绝对路径 (例如 /images/foo.png)，它将会被保留不变。
* 如果 URL 以 . 开头，它会作为一个相对模块请求被解释且基于你的文件系统中的目录结构进行解析。
* 如果 URL 以 ~ 开头，其后的任何内容都会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源：

``` html
<img src="~some-npm-package/foo.png">
```

* 如果 URL 以 @ 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 ```<projectRoot>/src``` 的别名 @。(仅作用于模版中)

### public 文件夹

* 任何放置在 public 文件夹的静态资源都会被简单的复制，而不经过 webpack。你需要通过绝对路径来引用它们
* 对不在public目录下面的内容vue-cli将会做下面这些调整
  + 脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求
  + 文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误
  + 最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们的老版本
* public 目录提供的是一个应急手段，当你通过绝对路径引用它时，留意应用将会部署到哪里。如果你的应用没有部署在域名的根部，那么你需要为你的 URL 配置 publicPath 前缀：
* 在 ```public/index.html``` 或其它通过``` html-webpack-plugin``` 用作模板的 HTML 文件中，你需要通过 ```<%= BASE_URL %>``` 设置链接前缀：

``` html
<link rel="icon" href="<%= BASE_URL %>favicon.ico">
```

* 在模板中，你首先需要向你的组件传入基础 URL：

``` javascript
data() {
    return {
        publicPath: process.env.BASE_URL
    }
}
```

然后：

``` html
<img :src="`${publicPath}my-image.png`">
```

### 何时使用 public 文件夹

* 你需要在构建输出中指定一个文件的名字
* 你有上千个图片，需要动态引用它们的路径
* 有些库可能和 webpack 不兼容，这时你除了将其用一个独立的 ```<script>``` 标签引入没有别的选择

## 处理CSS资源

* vue-cli天生支持post-css、css modules和包含sass、less、stylus在内的预处理器

### 引用静态资源

* 所有编译后的 CSS 都会通过 css-loader 来解析其中的 url() 引用，并将这些引用作为模块请求来处理。这意味着你可以根据本地的文件结构用相对路径来引用静态资源。另外要注意的是如果你想要引用一个 npm 依赖中的文件，或是想要用 webpack alias，则需要在路径前加上 ~ 的前缀来避免歧义

### 预处理器

* 你可以在创建项目的时候选择预处理器 (Sass/Less/Stylus)。如果当时没有选好，内置的 webpack 仍然会被预配置为可以完成所有的处理。你也可以手动安装相应的 webpack loader：

``` powershell
# Sass
npm install -D sass-loader sass

# Less
npm install -D less-loader less

# Stylus
npm install -D stylus-loader stylus
```

* 之后就可以引入相应类型的文件，并在.vue文件中下面这样使用

``` html
<style lang="scss">
    $color: red;
</style>
```

### 自动化导入

* 如果你想自动化导入文件 (用于颜色、变量、mixin……)，你可以使用 style-resources-loader。这里有一个关于 Stylus 的在每个单文件组件和 Stylus 文件中导入 ./src/styles/imports.styl 的例子：

``` javascript
// vue.config.js
const path = require('path')

module.exports = {
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    },
}

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/styles/imports.styl'),
            ],
        })
}
```

* 也可以直接使用vue-cli-plugin-resource-loader

### postCSS

* vue-cli内部使用了postCSS
* 你可以通过 .postcssrc 或任何 postcss-load-config 支持的配置源来配置 PostCSS。也可以通过 vue.config.js 中的 css.loaderOptions.postcss 配置 postcss-loader
* 我们默认开启了 autoprefixer。如果要配置目标浏览器，可使用 package.json 的 browserslist 字段

### CSS Modules

* 你可以通过 ```<style module>``` 以开箱即用的方式在 ```*.vue``` 文件中使用 CSS Modules。
* 如果想在 JavaScript 中作为 CSS Modules 导入 CSS 或其它预处理文件，该文件应该以 ```.module.(css|less|sass|scss|styl)``` 结尾

``` javascript
import styles from './foo.module.css'
// 所有支持的预处理器都一样工作
import sassStyles from './foo.module.scss'
```

* 如果你想去掉文件名中的 .module，可以设置 vue.config.js 中的 css.requireModuleExtension 为 false：

``` javascript
// vue.config.js
module.exports = {
    css: {
        requireModuleExtension: false
    }
}
```

* 如果你希望自定义生成的 CSS Modules 模块的类名，可以通过 vue.config.js 中的 css.loaderOptions.css 选项来实现。所有的 css-loader 选项在这里都是支持的，例如 localIdentName 和 camelCase

``` javascript
// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            css: {
                // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
                // Vue CLI v3 用户可参考 css-loader v1 文档
                // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
                modules: {
                    localIdentName: '[name]-[hash]'
                },
                localsConvention: 'camelCaseOnly'
            }
        }
    }
}
```

### 向预处理器 Loader 传递选项

* 有的时候你想要向 webpack 的预处理器 loader 传递选项。你可以使用 vue.config.js 中的 css.loaderOptions 选项。比如你可以这样向所有 Sass/Less 样式传入共享的全局变量：

``` javascript
// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
                additionalData: `@import "~@/variables.sass"`
            },
            // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
            // 因为 `scss` 语法在内部也是由 sass-loader 处理的
            // 但是在配置 `prependData` 选项的时候
            // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
            // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
            scss: {
                additionalData: `@import "~@/variables.scss";`
            },
            // 给 less-loader 传递 Less.js 相关选项
            less: {
                // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
                // `primary` is global variables fields name
                globalVars: {
                    primary: '#fff'
                }
            }
        }
    }
}
```

* Loader 可以通过 loaderOptions 配置，包括：
* css-loader
* postcss-loader
* sass-loader
* less-loader
* stylus-loader

## webpack配置相关

### 简单的配置方式

* 调整webpack配置最简单的方式是在vue.config.js文件中的configureWebpack选项提供的一个对象

``` javascript
// vue.config.js
module.exports = {
    configureWebpack: {
        plugins: [
            new MyAwesomeWebpackPlugin()
        ]
    }
}
```

* 该对象将会被webpack-merge合并并入最终的webpack配置中
* 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象：

``` javascript
// vue.config.js
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    }
}
```

### 链式操作 (高级)

* Vue CLI 内部的 webpack 配置是通过 webpack-chain 维护的。这个库提供了一个 webpack 原始配置的上层抽象，使其可以定义具名的 loader 规则和具名插件，并有机会在后期进入这些规则并对它们的选项进行修改。
* 它允许我们更细粒度的控制其内部配置。接下来有一些常见的在 vue.config.js 中的 chainWebpack 修改的例子。

### 修改 Loader 选项

``` javascript
// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    }
}
```

* 对于 CSS 相关 loader 来说，我们推荐使用 css.loaderOptions 而不是直接链式指定 loader。这是因为每种 CSS 文件类型都有多个规则，而 css.loaderOptions 可以确保你通过一个地方影响所有的规则

### 添加一个新的 Loader

``` javascript
// vue.config.js
module.exports = {
    chainWebpack: config => {
        // GraphQL Loader
        config.module
            .rule('graphql')
            .test(/\.graphql$/)
            .use('graphql-tag/loader')
            .loader('graphql-tag/loader')
            .end()
            // 你还可以再添加一个 loader
            .use('other-loader')
            .loader('other-loader')
            .end()
    }
}
```

### 替换一个规则里的 Loader

* 如果你想要替换一个已有的基础 loader，例如为内联的 SVG 文件使用 vue-svg-loader 而不是加载这个文件

``` javascript
// vue.config.js
module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')

        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()

        // 添加要替换的 loader
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    }
}
```

### 修改插件选项

``` javascript
// vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                return [ /* 传递给 html-webpack-plugin's 构造函数的新参数 */ ]
            })
    }
}
```

* 你需要熟悉 webpack-chain 的 API 并阅读一些源码以便了解如何最大程度利用好这个选项，但是比起直接修改 webpack 配置，它的表达能力更强，也更为安全。
* 比方说你想要将 index.html 默认的路径从 /Users/username/proj/public/index.html 改为 /Users/username/proj/app/templates/index.html。通过参考 html-webpack-plugin 你能看到一个可以传入的选项列表。我们可以在下列配置中传入一个新的模板路径来改变它：

``` javascript
// vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].template = '/Users/username/proj/app/templates/index.html'
                return args
            })
    }
}
```

* 你可以通过接下来要讨论的工具 vue inspect 来确认变更

### 审查项目的 webpack 配置

* 因为 @vue/cli-service 对 webpack 配置进行了抽象，所以理解配置中包含的东西会比较困难，尤其是当你打算自行对其调整的时候。
* vue-cli-service 暴露了 inspect 命令用于审查解析好的 webpack 配置。那个全局的 vue 可执行程序同样提供了 inspect 命令，这个命令只是简单的把 vue-cli-service inspect 代理到了你的项目中。
* 该命令会将解析出来的 webpack 配置、包括链式访问规则和插件的提示打印到 stdout。
* 你可以将其输出重定向到一个文件以便进行查阅：

``` powershell
vue inspect > output.js
```

* 注意它输出的并不是一个有效的 webpack 配置文件，而是一个用于审查的被序列化的格式。
* 你也可以通过指定一个路径来审查配置的一小部分：

``` powershell
# 只审查第一条规则
vue inspect module.rules.0
```

* 或者指向一个规则或插件的名字：

``` powershell
vue inspect --rule vue
vue inspect --plugin html
```

* 最后，你可以列出所有规则和插件的名字：

``` powershell
vue inspect --rules
vue inspect --plugins
```

### 以一个文件的方式使用解析好的配置

* 有些外部工具可能需要通过一个文件访问解析好的 webpack 配置，比如那些需要提供 webpack 配置路径的 IDE 或 CLI。在这种情况下你可以使用如下路径：

``` powershell
<projectRoot>/node_modules/@vue/cli-service/webpack.config.js
```

* 该文件会动态解析并输出 vue-cli-service 命令中使用的相同的 webpack 配置，包括那些来自插件甚至是你自定义的配置。

## 模式跟环境变量

### 模式

* 模式是 Vue CLI 项目中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式：
  + development 模式用于 vue-cli-service serve
  + test 模式用于 vue-cli-service test:unit
  + production 模式用于 vue-cli-service build 和 vue-cli-service test:e2e
* 你可以通过传递 --mode 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量：

``` powershell
vue-cli-service build --mode development
```

* 当运行 vue-cli-service 命令时，所有的环境变量都从对应的环境文件中载入。如果文件内部不包含 NODE_ENV 变量，它的值将取决于模式，例如，在 production 模式下被设置为 "production"，在 test 模式下被设置为 "test"，默认则是 "development"。
* NODE_ENV 将决定您的应用运行的模式，是开发，生产还是测试，因此也决定了创建哪种 webpack 配置。
* 例如通过将 NODE_ENV 设置为 "test"，Vue CLI 会创建一个优化过后的，并且旨在用于单元测试的 webpack 配置，它并不会处理图片以及一些对单元测试非必需的其他资源。
* 同理，NODE_ENV=development 创建一个 webpack 配置，该配置启用热更新，不会对资源进行 hash 也不会打出 vendor bundles，目的是为了在开发的时候能够快速重新构建。
* 当你运行 vue-cli-service build 命令时，无论你要部署到哪个环境，应该始终把 NODE_ENV 设置为 "production" 来获取可用于部署的应用程序。

### 环境变量

* 你可以在你的项目根目录中放置下列文件来指定环境变量：

``` powershell
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

* 一个环境文件只包含环境变量的“键=值”对：

``` powershell
FOO=bar
VUE_APP_NOT_SECRET_CODE=some_value
```

* 请注意，只有 NODE_ENV，BASE_URL 和以 VUE_APP_ 开头的变量将通过 webpack. DefinePlugin 静态地嵌入到客户端侧的代码中。这是为了避免意外公开机器上可能具有相同名称的私钥。
* 想要了解解析环境文件规则的细节，请参考 dotenv。我们也使用 dotenv-expand 来实现变量扩展 (Vue CLI 3.5+ 支持)。例如：

``` javascript
FOO = foo
BAR = bar

CONCAT = $FOO$BAR # CONCAT = foobar
```

* 被载入的变量将会对 vue-cli-service 的所有命令、插件和依赖可用。

### 环境文件加载优先级

* 为一个特定模式准备的环境文件 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级。
* 此外，Vue CLI 启动时已经存在的环境变量拥有最高优先级，并不会被 .env 文件覆写。
* .env 环境文件是通过运行 vue-cli-service 命令载入的，因此环境文件发生变化，你需要重启服务。

### 示例：Staging 模式

* 假设我们有一个应用包含以下 .env 文件：

``` powershell
VUE_APP_TITLE=My App
```

和 .env.staging 文件：

``` powershell
NODE_ENV=production
VUE_APP_TITLE=My App (staging)
```

* vue-cli-service build 会加载可能存在的 .env、.env.production 和 .env.production.local 文件然后构建出生产环境应用。
* vue-cli-service build --mode staging 会在 staging 模式下加载可能存在的 .env、.env.staging 和 .env.staging.local 文件然后构建出生产环境应用。
* 这两种情况下，根据 NODE_ENV，构建出的应用都是生产环境应用，但是在 staging 版本中，process.env. VUE_APP_TITLE 被覆写成了另一个值。

### 在客户端侧代码中使用环境变量

只有以 VUE_APP_ 开头的变量会被 webpack. DefinePlugin 静态嵌入到客户端侧的包中。你可以在应用的代码中这样访问它们：

``` javascript
console.log(process.env.VUE_APP_SECRET)
```

* 在构建过程中，process.env. VUE_APP_SECRET 将会被相应的值所取代。在 VUE_APP_SECRET=secret 的情况下，它会被替换为 "secret"。
* 除了 VUE_APP_* 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：
* NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
* BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。
* 所有解析出来的环境变量都可以在 public/index.html 中以 HTML 插值中介绍的方式使用。

### 提示

* 你可以在 vue.config.js 文件中计算环境变量。它们仍然需要以 VUE_APP_ 前缀开头。这可以用于版本信息:

``` javascript
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    // config
}
```

### 只在本地有效的变量

* 有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 .env.local 文件取而代之。本地环境文件默认会被忽略，且出现在 .gitignore 中。
* .local 也可以加在指定模式的环境文件上，比如 .env.development.local 将会在 development 模式下被载入，且被 git 忽略。

## 构建目标

* 当你运行 vue-cli-service build 时，你可以通过 --target 选项指定不同的构建目标。它允许你将相同的源代码根据不同的用例生成不同的构建

### 应用

* 应用模式是默认的模式。在这个模式中：
  + index.html 会带有注入的资源和 resource hint
  + 第三方库会被分到一个独立包以便更好的缓存
  + 小于 4kb 的静态资源会被内联在 JavaScript 中
  + public 中的静态资源会被复制到输出目录中

### 库

* 你可以通过下面的命令将一个单独的入口构建为一个库：

``` powershell
vue-cli-service build --target lib --name myLib [entry]
```

``` powershell
File                     Size                     Gzipped

dist/myLib.umd.min.js    13.28 kb                 8.42 kb
dist/myLib.umd.js        20.95 kb                 10.22 kb
dist/myLib.common.js     20.57 kb                 10.09 kb
dist/myLib.css           0.33 kb                  0.23 kb
```

* 这个入口可以是一个 .js 或一个 .vue 文件。如果没有指定入口，则会使用 src/App.vue。
* 构建一个库会输出：
  + dist/myLib.common.js：一个给打包器用的 CommonJS 包 (不幸的是，webpack 目前还并没有支持 ES modules 输出格式的包)
  + dist/myLib.umd.js：一个直接给浏览器或 AMD loader 使用的 UMD 包
  + dist/myLib.umd.min.js：压缩后的 UMD 构建版本
  + dist/myLib.css：提取出来的 CSS 文件 (可以通过在 vue.config.js 中设置 css: { extract: false } 强制内联)

### Vue vs. JS/TS 入口文件

* 当使用一个 .vue 文件作为入口时，你的库会直接暴露这个 Vue 组件本身，因为组件始终是默认导出的内容。
* 然而，当你使用一个 .js 或 .ts 文件作为入口时，它可能会包含具名导出，所以库会暴露为一个模块。也就是说你的库必须在 UMD 构建中通过 window.yourLib.default 访问，或在 CommonJS 构建中通过 const myLib = require('mylib').default 访问。如果你没有任何具名导出并希望直接暴露默认导出，你可以在 vue.config.js 中使用以下 webpack 配置：

``` javascript
module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    }
}
```

### Web Components 组件

* 你可以通过下面的命令将一个单独的入口构建为一个 Web Components 组件：

``` powershell
vue-cli-service build --target wc --name my-element [entry]
```

* 注意这里的入口应该是一个 *.vue 文件。Vue CLI 将会把这个组件自动包裹并注册为 Web Components 组件，无需在 main.js 里自行注册。也可以在开发时把 main.js 作为 demo app 单独使用。
* 该构建将会产生一个单独的 JavaScript 文件 (及其压缩后的版本) 将所有的东西都内联起来。当这个脚本被引入网页时，会注册自定义组件 ```<my-element>```，其使用 @vue/web-component-wrapper 包裹了目标的 Vue 组件。这个包裹器会自动代理属性、特性、事件和插槽。请查阅 @vue/web-component-wrapper 的文档了解更多细节。
* 注意这个包依赖了在页面上全局可用的 Vue。
* 这个模式允许你的组件的使用者以一个普通 DOM 元素的方式使用这个 Vue 组件：

``` html
<script src="https://unpkg.com/vue"></script>
<script src="path/to/my-element.js"></script>

<!-- 可在普通 HTML 中或者其它任何框架中使用 -->
<my-element></my-element>
```

### 注册多个 Web Components 组件的包

* 当你构建一个 Web Components 组件包的时候，你也可以使用一个 glob 表达式作为入口指定多个组件目标：

``` powershell
vue-cli-service build --target wc --name foo 'src/components/*.vue'
```

* 当你构建多个 web component 时，--name 将会用于设置前缀，同时自定义元素的名称会由组件的文件名推导得出。比如一个名为 HelloWorld.vue 的组件携带 --name foo 将会生成的自定义元素名为 \<foo-hello-world\>

### 异步 Web Components 组件

* 当指定多个 Web Components 组件作为目标时，这个包可能会变得非常大，并且用户可能只想使用你的包中注册的一部分组件。这时异步 Web Components 模式会生成一个 code-split 的包，带一个只提供所有组件共享的运行时，并预先注册所有的自定义组件小入口文件。一个组件真正的实现只会在页面中用到自定义元素相应的一个实例时按需获取：

``` powershell
vue-cli-service build --target wc-async --name foo 'src/components/*.vue'

File                Size                        Gzipped

dist/foo.0.min.js    12.80 kb                    8.09 kb
dist/foo.min.js      7.45 kb                     3.17 kb
dist/foo.1.min.js    2.91 kb                     1.02 kb
dist/foo.js          22.51 kb                    6.67 kb
dist/foo.0.js        17.27 kb                    8.83 kb
dist/foo.1.js        5.24 kb                     1.64 kb
```

* 现在用户在该页面上只需要引入 Vue 和这个入口文件即可：

``` html
<script src="https://unpkg.com/vue"></script>
<script src="path/to/foo.min.js"></script>

<!-- foo-one 的实现的 chunk 会在用到的时候自动获取 -->
<foo-one></foo-one>
```

### 在构建时使用 vuex

* 在构建 Web Components 组件或库时，入口点不是 main.js ，而是 entry-wc.js 文件，该文件由此生成： https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/commands/build/resolveWcEntry.js

因此，要在 Web Components 组件的目标中使用 vuex ，你需要在 App.vue 中初始化存储 (store):

``` javascript
import store from './store'

// ...

export default {
    store,
    name: 'App',
    // ...
}
```

## 部署

* 浏览官网的部署方案即可
