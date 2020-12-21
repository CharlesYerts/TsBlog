(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webpack性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack性能优化"}},[s._v("#")]),s._v(" webpack性能优化")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"总体思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总体思想"}},[s._v("#")]),s._v(" 总体思想")]),s._v(" "),a("ul",[a("li",[s._v("webpack性能优化总体上可以分为开发环境的性能优化跟生产环境的性能优化")])]),s._v(" "),a("h2",{attrs:{id:"开发环境性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境性能优化"}},[s._v("#")]),s._v(" 开发环境性能优化")]),s._v(" "),a("ul",[a("li",[s._v("优化打包构建速度")]),s._v(" "),a("li",[s._v("优化代码的调试")])]),s._v(" "),a("h2",{attrs:{id:"生产环境性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生产环境性能优化"}},[s._v("#")]),s._v(" 生产环境性能优化")]),s._v(" "),a("ul",[a("li",[s._v("优化打包构建速度")]),s._v(" "),a("li",[s._v("优化代码运行性能")])]),s._v(" "),a("h2",{attrs:{id:"hmr-hot-module-replace-热重载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hmr-hot-module-replace-热重载"}},[s._v("#")]),s._v(" HMR（Hot Module Replace）热重载")]),s._v(" "),a("ul",[a("li",[s._v("当前开发环境存在的问题有以下几点")]),s._v(" "),a("li",[s._v("当我们修改一些样式文件时候会发现js逻辑代码也会被重新打包构建")]),s._v(" "),a("li",[s._v("并且如果我们修改了一些js文件，没有发生修改的js文件也会被重新打包构建，样式文件跟结构文件同样如此")]),s._v(" "),a("li",[s._v("因此我们想要实现我们只修改一个模块，只有一个模块被重新打包构建的功能")]),s._v(" "),a("li",[s._v("对js文件实现hmr功能我们只需要添加一个devServer的配置项，也就是hot设置为true就可以了")]),s._v(" "),a("li",[s._v("之后我们修改一些样式文件会发现js文件没有被重新打包构建")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    contentBase"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    open"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    hot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("样式文件可以实现HMR功能的原因是因为style-loader内部实现了HMR，但是生产环境下我们抽离css样式的时候不需要这样做，因此mini-css-extract-plugin没有实现HMR功能，因此我们只有在生产环境下能够使用上述配置")]),s._v(" "),a("li",[s._v("但是js文件默认不支持HMR功能，因此我们修改js代码的时候会发现并没有按照HMR的方式来更新")]),s._v(" "),a("li",[s._v("html功能也不支持HMR，同时当我们开启HMR的时候会导致html不能实现热更新")]),s._v(" "),a("li",[s._v("为了能够热更新，我们需要将html文件也放入入口配置中:")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/js/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("虽然这样做能够热更新，但是一样没有HMR功能（我们也不需要对html文件做HMR功能）")]),s._v(" "),a("li",[s._v("但是我们的js文件需要做HMR，为了实现这个，我们需要修改js代码，添加一些支持HMR功能的代码")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./add.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./sub.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("js的HMR是针对一些非入口文件模块的HMR实现的")]),s._v(" "),a("li",[s._v("因此上面的代码是放在入口文件里面的，代码的逻辑就是会先在全局变量中查找module有没有hot方法，如果有的话")]),s._v(" "),a("li",[s._v("就开始使用hot方法的监听方法监听模块文件，这里我们监听了add文件跟sub文件，一旦这些文件发生变化，将会执行后面的回调函数，如果不发生变化，什么都不执行，这样也就实现了热模块替换的功能，我们的调用是出现在入口文件里面，所以这样做很合理")]),s._v(" "),a("li",[s._v("总结一下就是：\n"),a("ul",[a("li",[s._v("css的HMR，原生自带的，只需配置一下devServer的hot为true")]),s._v(" "),a("li",[s._v("html不需要开启HMR，但是devServer配置的更改会导致不能热更新，因此我们需要将html文件也放在entry里面")]),s._v(" "),a("li",[s._v("js的HMR开启需要我们自己代码实现，但对入口文件不用做，因此热更新的判断规则是在入口文件里面")])])])]),s._v(" "),a("h2",{attrs:{id:"source-map-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-map-调试"}},[s._v("#")]),s._v(" source map 调试")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("source map是一种提供源代码到构建后的代码的映射的技术")])]),s._v(" "),a("li",[a("p",[s._v("可以帮助我们通过构建后的代码找到源代码出错的位置，并进行调试")])]),s._v(" "),a("li",[a("p",[s._v("也就是说我们可以根据映射关系，找到源代码中出现的错误")])]),s._v(" "),a("li",[a("p",[s._v("在webpack中使用的时候我们只需要添加一个devtool属性，并将其值赋为'source-map'即可")])]),s._v(" "),a("li",[a("p",[s._v("之后构建的时候我们会发现js文件目录下面会多出来一个map文件，这个就是映射关系")])]),s._v(" "),a("li",[a("p",[s._v("source-map的大致配置为：")]),s._v(" "),a("ul",[a("li",[s._v("source-map：会生成外部的.map文件保存映射关系，在页面的调试过程中，可以帮我们找到具体的出错的源代码的位置")]),s._v(" "),a("li",[s._v("inline-source-map：这种会直接内联嵌入在js模块中，速度更快，不会生成.map文件,在页面的调试过程中，可以帮我们找到具体的出错的源代码的位置")]),s._v(" "),a("li",[s._v("hidden-source-map：外部映射，会产生.map文件，在页面的调试过程中，可以帮我们找到错误原因，但是没有错误位置，不能追踪到源代码，只能提示构建后的代码的错误位置")]),s._v(" "),a("li",[s._v("eval-source-map：会直接嵌入在js代码的每一行中，不会像inline那样都会堆积到模块的最后，在页面的调试过程中，可以帮我们找到具体的出错的源代码的位置，并且会给每个方法添加一个唯一的哈希值作为追踪的根据")]),s._v(" "),a("li",[s._v("nosource-source-map：会生成外部的.map文件保存映射关系，可以找到错误代码的准确信息，但是没有任何源代码信息（可以防止源代码泄露）")]),s._v(" "),a("li",[s._v("cheap-source-map：会生成外部的.map文件保存映射关系,在页面的调试过程中，可以帮我们找到具体的出错的源代码的位置但是只会精确到行")]),s._v(" "),a("li",[s._v("cheap-module-source-map：会生成外部的.map文件保存映射关系")])])]),s._v(" "),a("li",[a("p",[s._v("我们发现有这么多的参数可以调整，那我们如何使用呢")])]),s._v(" "),a("li",[a("p",[s._v("我们会从两个角度出发来使用上面的参数：")])]),s._v(" "),a("li",[a("p",[s._v("第一个是开发环境，开发环境要求我们快速响应，调试更友好")])]),s._v(" "),a("li",[a("p",[s._v("速度比较（eval>inline>cheap...）")]),s._v(" "),a("ul",[a("li",[s._v("eval-cheap-source-map")]),s._v(" "),a("li",[s._v("eval-source-map")])])]),s._v(" "),a("li",[a("p",[s._v("调试友好：")]),s._v(" "),a("ul",[a("li",[s._v("source-map")]),s._v(" "),a("li",[s._v("cheap-module-source-map")]),s._v(" "),a("li",[s._v("cheap-source-map")])])]),s._v(" "),a("li",[a("p",[s._v("综合上面的排名，开发环境我们可以选择使用eval-source-map或者eval-cheap-module-source-map")])]),s._v(" "),a("li",[a("p",[s._v("第二个是生产环境，源代码不能暴露，调试要不要友好")]),s._v(" "),a("ul",[a("li",[s._v("nosource-source-map")]),s._v(" "),a("li",[s._v("hidden-source-map")])])]),s._v(" "),a("li",[a("p",[s._v("内联的方式会导致文件体积变大")])]),s._v(" "),a("li",[a("p",[s._v("因此综合上面的因素，在生产环境下的推荐配置有source-map跟cheap-module-source-map，要隐藏源代码的话就是用上面的两种")])])]),s._v(" "),a("h2",{attrs:{id:"oneof-优化加载配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oneof-优化加载配置"}},[s._v("#")]),s._v(" oneOf 优化加载配置")]),s._v(" "),a("ul",[a("li",[s._v("我们会发现当前写的配置中每一个loader都加载了不同文件格式的内容，除非就是两个内容都是处理js这种，其他的都是独立的")]),s._v(" "),a("li",[s._v("但是我们webpack实际加载的过程中对每个文件进行处理的时候所有的loader都要过一遍，这样一来就会导致有些完全不必要过的loader也会被过一边")]),s._v(" "),a("li",[s._v("因此我们需要一种配置，能够做到对某些loader做选择性的加载，理论上这种机制只会通过给定的一个loader数组中的一个loader，其他的就不会过了")]),s._v(" "),a("li",[s._v("我们要优化的oneOf配置项就是完成这一功能的，也就是，我们传入oneOf里面一些不同的loader，之后处理文件的时候先看文件格式，符合哪个loader就使用哪个loader，具体使用方式请看下面的例子")]),s._v(" "),a("li",[s._v("请仔细观察rules发生的变化")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 两个loader同时处理一个格式的文件的时候可以拆分出去一个到外面")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules ")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'eslint-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      enforce"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pre'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        fix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在这里的loader中只会执行一个loader")]),s._v("\n      oneOf"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          MiniCssExtractPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.html$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'html-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/preset-env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              useBuiltIns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'usage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              corejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              targets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'60'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                firefox"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'60'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                ie"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                safari"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                edge"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'17'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"缓存配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存配置"}},[s._v("#")]),s._v(" 缓存配置")]),s._v(" "),a("ul",[a("li",[s._v("在生产环境我们会从两个方面入手处理缓存")]),s._v(" "),a("li",[s._v("一个是Babel、第二个就是对整体的资源进行缓存")]),s._v(" "),a("li",[s._v("在写代码的时候实际上js代码是最多的，结构跟样式相对于js代码来说比较少")]),s._v(" "),a("li",[s._v("但是为什么要对babel进行缓存呢，这是因为babel要对我们写的js代码进行编译处理")]),s._v(" "),a("li",[s._v("当我们的js模块变多的时候我们会重复编译很多不用重新编译的内容，我们在开发环境下可以使用HMR功能来实现这个操作")]),s._v(" "),a("li",[s._v("但是在生产环境下就不能使用HMR功能了，因为HMR是基于devServer的生产环境下就没有devServer")]),s._v(" "),a("li",[s._v("我们的思路就是我们先对所有的编译好的内容做缓存处理，之后有代码改变的话就更新新的代码内容，其他的就直接使用缓存的内容")]),s._v(" "),a("li",[s._v("babel的缓存我们需要在options选项里面添加一个cacheDirectory为true")]),s._v(" "),a("li",[s._v("这样的话第二次构建的时候将会使用缓存里的内容")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("        options"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          presets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@babel/preset-env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              useBuiltIns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'usage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              corejs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                version"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              targets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                chrome"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'60'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                firefox"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'60'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                ie"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'9'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                safari"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                edge"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'17'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          cacheDirectory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("那么我们怎么查看缓存有没有生效呢，我们可以写一个server来查看")]),s._v(" "),a("li",[s._v("当然是先安装一个express，然后创建一个服务，用node来执行这个server.js文件即可")])]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    maxAge"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v("当代码运行成功之后我们就可以访问这个服务器")])]),s._v(" "),a("li",[a("p",[s._v("也就是'127.0.0.1:3000'")])]),s._v(" "),a("li",[a("p",[s._v("之后启动服务器，访问地址，发现请求头中多了个缓存的配置，之后的内容也会从缓存的内容中进行请求")])]),s._v(" "),a("li",[a("p",[s._v("但是这样实现了缓存之后就会出现一个问题，就是当我们修改代码的话提交完了之后还是会从缓存中读取内容给用户，因为之前的文件的名称没有发生改变，默认认为缓存有效")])]),s._v(" "),a("li",[a("p",[s._v("也就是当资源在强制缓存期间不会访问服务器的")])]),s._v(" "),a("li",[a("p",[s._v("但当我们的资源名称发生改变的话文件将会被重新请求，我们可以利用这一属性更新我们的资源")])]),s._v(" "),a("li",[a("p",[s._v("在webpack中我们只需在build出来的js文件的后面加一个哈希值即可，每次都会不一样，因此就可以实现重新请求了")])]),s._v(" "),a("li",[a("p",[s._v("同理，样式文件的后面也可以加上哈希值")]),s._v(" "),a("ul",[a("li",[s._v("babel缓存使用配置中的cacheDirectory")]),s._v(" "),a("li",[s._v("文件资源缓存使用哈希值")])])]),s._v(" "),a("li",[a("p",[s._v("但是有些时候我们只修改js文件，会发现css文件的缓存也失效了，实际上css文件不用重新打包的，这是因为js跟css用的是同一个hash值")])]),s._v(" "),a("li",[a("p",[s._v("因此我们可以将hash:10改成chunkhash，chunkhash的工作原理就是如果打包的内容来自同一个chunk就会一样")])]),s._v(" "),a("li",[a("p",[s._v("但是我们会发现chunkhash还是一样的，这是因为js中引入了css，因此被打包成了同一个chunk")])]),s._v(" "),a("li",[a("p",[s._v("这里我们可以了解一下chunk的概念")]),s._v(" "),a("ul",[a("li",[s._v("在webpack开发中，同一个入口文件打包生成的文件为一个chunk也就是一个代码块")])])]),s._v(" "),a("li",[a("p",[s._v("基于上面出现的问题考虑，我们可以使用contenthash，这个hash会根据资源的内容产生hash")])]),s._v(" "),a("li",[a("p",[s._v("也就是说，我们问题的终极解决方案就是使用contenthash")])]),s._v(" "),a("li",[a("p",[s._v("我们应该记住webpack中使用的哈希值")]),s._v(" "),a("ul",[a("li",[s._v("hash：每次webpack打包生成的唯一的哈希值")]),s._v(" "),a("li",[s._v("chunkhash：根据每一个代码块来生成的唯一的哈希值，一个入口的文件是一个chunk")]),s._v(" "),a("li",[s._v("contenthash：根据每个文件的内容生成的唯一的哈希值，文件不一样哈希值也不一样")])])]),s._v(" "),a("li",[a("p",[s._v("babel缓存的作用：第二次打包构建更快")])]),s._v(" "),a("li",[a("p",[s._v("资源缓存的作用：第二次请求更快")])])]),s._v(" "),a("h2",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[s._v("#")]),s._v(" tree shaking")]),s._v(" "),a("ul",[a("li",[s._v("tree shaking的作用就是去除代码中没有被使用的内容")]),s._v(" "),a("li",[s._v("可以让我们代码的体积更小")]),s._v(" "),a("li",[s._v("tree shaking的前提条件是：\n"),a("ul",[a("li",[s._v("使用esModule，commenJS的模块化不能实现tree shaking")]),s._v(" "),a("li",[s._v("选择模式的production模式（会自动的开启tree shaking）")])])]),s._v(" "),a("li",[s._v("但有些时候tree shaking可能会将css代码作为要shaking的内容直接删除掉")]),s._v(" "),a("li",[s._v("我们可以模拟这种场景，在package.json中添加sideEffects")]),s._v(" "),a("li",[s._v("直接添加一个"),a("code",[s._v('"sideEffects":false')]),s._v("配置即可")]),s._v(" "),a("li",[s._v("sideEffects为false的意思就是，所有代码都是没有副作用的代码，都可以进行tree shaking")]),s._v(" "),a("li",[s._v("设置完这个以后我们再去构建后的目录里面就会发现css文件直接没了")]),s._v(" "),a("li",[s._v("同样的也可能将一些babel/polyfill之类的代码进行删除掉")]),s._v(" "),a("li",[s._v("因此我们想避免这种情况")]),s._v(" "),a("li",[s._v("为了达到这个目的，我们可以对sideEffects进行配置，")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sideEffects"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.less"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("ul",[a("li",[s._v("这样一来，将不会对css文件less文件进行tree shaking操作了")])])])}),[],!1,null,null,null);t.default=e.exports}}]);