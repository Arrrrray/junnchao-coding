前端其实是个很大的范畴。我这里只针对 web 开发的前端而言（下文统称前端）。简单点说，针对浏览器的开发，浏览器呈现出来的页面就是前端。它的实质是前端代码在浏览器端被编译、运行、渲染。前端代码主要由三个部分构成：[HTML（超文本标记语言](https://www.w3school.com.cn/html/index.asp)）、[CSS（级联样式表）](https://www.w3school.com.cn/css/index.asp)、[JavaScript](https://www.w3school.com.cn/js/index.asp)。如图所示：

![图片](https://uploader.shimo.im/f/QbZUDFDyQyEvQg5R.png!thumbnail)

# 前端发展历程

前端也算是经历了一个比较漫长的发展过程，大致历程可以分为以下几个阶段：

## 上古时代

这个节点不得不说一下，世界上第一款浏览器 [NCSAMosaic](https://baike.baidu.com/item/Mosaic%E6%B5%8F%E8%A7%88%E5%99%A8/9963015?fr=aladdin) ，是网景公司（Netscape）在1994年开发出来的，它的初衷是为了方便科研人员查阅资料、文档（这个时候的文档大多是图片形式的）。那个时代的每一个交互，按钮点击、表单提交，都需要等待浏览器响应很长时间，然后重新下载一个新页面给你看，大概是这样：

![图片](https://uploader.shimo.im/f/JJ75t7303tDgRSzo.png!thumbnail)

同年 [PHP（超文本预处理器）](https://www.w3school.com.cn/php/index.asp) 脚本语言被开发出来，开启了数据嵌入模板的 MVC 模式，同时期比较类似的做法有以下几种：

* PHP 直接将数据内嵌到 HTML 中。
* ASP 的 ASPX，在 HTML 中嵌入 C# 代码。
* Java 的 JSP 直接将数据嵌入到网页中。

这个时期，浏览器的开发者，以后台开发人员居多，大部分前后端开发是一体的，大致开发流程是：后端收到浏览器的请求 ---> 发送静态页面 ---> 发送到浏览器。即使是有专门的前端开发，也只是用 HTML 写写页面模板、CSS 给页面排个好看点的版式（要不是我堂堂程序员看不上这点活，你们这些个切图仔就得要饭去~）。

## 铁器时代（小前端时代）

1995年，这是个好年份，又是这个搞事的网景公司，拜托一位叫[布兰登·艾奇](https://baike.baidu.com/item/Brendan%20Eich)的大佬，希望开发出一个类似 Java 的脚本语言，用来提升浏览器的展示效果，增强动态交互能力。结果大佬喝着啤酒抽着烟，十来天就把这个脚本语言写出来了，功能很强大，就是语法一点都不像 Java。这样就渐渐形成了前端的雏形：HTML 为骨架，CSS 为外貌，JavaScript 为交互。

同时期微软等一些公司也针对自家浏览器开发出了自己的脚本语言。浏览器五花八门，虽然有了比较统一的 ECMA 标准，但是浏览器先于标准在市场上流行开来，成为了事实标准。导致，现在前端工程师还要在做一些政府古老项目的时候，还要去处理浏览器兼容（万恶的 IE 系列）。

不管怎么说，前端开发也算是能写点逻辑代码了，不再是只能画画页面的低端开发了。随着1998年[ AJax](https://www.w3school.com.cn/ajax/index.asp) 的出现，前端开发从 web1.0迈向了web2.0，前端从纯内容的静态展示，发展到了动态网页，富交互，前端数据处理的新时期。这一时期，比较知名的两个富交互动态的浏览器产品是：

* Gmail（2004年）
* Google 地图（2005年）

由于动态交互、数据交互的需求增多，还衍生出了[jQuery](https://www.w3school.com.cn/jquery/index.asp)（2006） 这样优秀的跨浏览器的 js 工具库，主要用于 DOM 操作，数据交互。有些古老的项目，甚至近几年开发的大型项目现在还在使用 jQuery，以至于 jQuery 库现在还在更新，虽然体量上已经远远不及 React、Vue 这些优秀的前端库。

## 信息时代（大前端时代）

自 2003 以后，前端发展渡过了一段比较平稳的时期，各大浏览器厂商除了按部就班的更新自己的浏览器产品之外，没有再作妖搞点其他事情。但是我们程序员们耐不住寂寞啊，工业化推动了信息化的快速到来，浏览器呈现的数据量越来越大，网页动态交互的需求越来越多，JavaScript 通过操作 DOM 的弊端和瓶颈越来越明显（频繁的交互操作，导致页面会很卡顿），仅仅从代码层面去提升页面性能，变得越来越难。于是优秀的大佬们又干了点惊天动地的小事儿：

* 2008 年，谷歌 V8 引擎发布，终结微软 IE 时代。
* 2009 年 [AngularJS](https://www.runoob.com/angularjs/angularjs-tutorial.html) 诞生、[Node](https://www.runoob.com/nodejs/nodejs-tutorial.html)诞生。
* 2011 年[ ReactJS](https://www.runoob.com/react/react-tutorial.html) 诞生。
* 2014 年 [VueJS](https://www.runoob.com/vue2/vue-tutorial.html) 诞生。

其中，V8 和 node 的出现，使前端开发人员可以用熟悉的语法糖编写后台系统，为前端提供了使用同一语言的实现全栈开发的机会（JavaScript不再是一个被嘲笑只能写写页面交互的脚本语言）。React、Angular、Vue 等 MVVM 前端框架的出现，使前端实现了项目真正的应用化（SPA单页面应用），不再依赖后台开发人员处理页面路由 Controller，实现页面跳转的自我管理。同时也推动了前后端的彻底分离（前端项目独立部署，不再依赖类似的 template 文件目录）。在这里解释下 MVVM 模式：

* Model：提供/保存数据
* View：视图
* View-Model：简化的 Controller，唯一的作用就是为 View 提供处理好的数据，不含其它逻辑

至于为啥 MVVM 框架能提升前端的渲染性能，这里简单的总结下原理，因为大量的 DOM 操作是性能瓶颈的罪魁祸首，那通过一定的分析比较算法，实现同等效果下的最小 DOM 开销是可行的。React、Vue 这类框架大都是通过这类思想实现的，具体实现，大家感兴趣的可以去翻下源码哈，这里不做展开。前端分离也导致前端的分工发生了变化：

![图片](https://uploader.shimo.im/f/pIQNIY1UBsPt3cGz.png!thumbnail)

后端更加关注数据服务，前端完全控制自己的各种行为，可玩性更高。当然相应的学习成本也越来越大，node的出现也使得前端前后端一起开发成为可能，好多大公司在 2015 年前后就进行了尝试，用 node 作为中间数据转接层，让后端更加专注于数据服务和治理。

## 全能前端时代

2009年开始，大屏智能手机开始陆续出现，到后来 4G 移动网络的普及。使得前端从单一的基于的 PC 浏览器 展示的 web 应用，开始向手机、平板覆盖（HTML，CSS，JavaScript 也陆续推出了自己的新标准）。前端对于跨端浏览的需求越来越大，前端不再仅仅是 PC web 方面的开发，手机配置，与 app 进行 hybird 开发，变成了常态。甚至于 Facebook 推出了 [React-Native](https://reactnative.cn/)，国内微信、支付宝推出小程序，试图整合web、native 开发。为什么会有这样的情形发生呢，网速越来越快，硬件性能越来越好，js 在各个终端的运行能力与 native 开发（IOS、Android）的差距越来越小，就让我们搞事儿（喜欢偷懒）的程序员们想着能不能写一套代码，然后四处运行呢。

能的，这个可以有，React-Native，小程序，以至于后来出现的 [Electron](http://www.electronjs.org/)，使得用 JavaScript 开发桌面应用都成为了可能（VSCode）。谷歌近两年也推出了 [Flutter](https://flutter.dev/) 的开发语言，可以实现一套代码，多处运行（web、app）。前端真的不再是只能切图，开发静态页面的前端。后端可以搞、爬虫可以搞（node），app 可以写（Weex、RN、Flutter），桌面应用可以开发（Electron）,算法和语言的严谨性还有点短板，但是 [TypeScript ](https://www.runoob.com/typescript/ts-tutorial.html)的出现，以及后续 ECMA 标准的近一步完善，会使得前端更加的全能化，也可能会出现更多的细分工作领域。

最后，告诉大家“Any application that can be written in JavaScript, will eventually be written in JavaScript.”这是个生态圈的概念（最早见于谷歌教父 在《黑客与画家》中对于浏览器生态的想法），包括浏览器，包括微信、支付宝都已经早早走在了这条“不归路”上。

前端开发越来越全能，希望我们这些前端开发的学习者们能够不畏艰辛，勇往直前，开发出越来越多好用的产品。

# 前端开发技能链接

* [菜鸟教程](https://www.runoob.com/)：超多的编程开发知识集合网站，也可以当作资料查询网站，好用推荐！
* [MDN](https://developer.mozilla.org/zh-CN/)：Web编程开发最近技术发布网站，也可以当作资料查询网站，强烈推荐！
* [React](https://reactjs.org/)：React官网，React最新技术和更新的集散地。
* [Vue](https://cn.vuejs.org/)：Vue官网，想学习Vue的可以看这里，Vue框架小巧，灵活，特别适合入门学习！
* [React Native](https://github.com/facebook/react-native)：React Native的github
* [Electron](http://www.electronjs.org/)：Electron官网
* [Flutter](https://flutter.dev/)：Flutter 官网
* [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/)：微信小程序官方文档
* [支付宝小程序](https://opendocs.alipay.com/mini/developer)：支付宝小程序官方文档
* [百度小程序](https://smartprogram.baidu.com/docs/introduction/enter_application/)：百度小程序官方文档
* [字节跳动小程序](https://microapp.bytedance.com/)：字节跳动小程序（头条小程序）官方文档

前端开发需要学习的东西真的很多，并且技术在不断的更新换代，大家一起加油！

# 参考文档

作者：mit

链接：[https://segmentfault.com/a/1190000020281750](https://segmentfault.com/a/1190000020281750)

来源：SegmentFault 思否









