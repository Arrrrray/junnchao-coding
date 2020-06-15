# 微信小程序：使用wx.navigateTo跳转页面的时候传参

在微信小程序开发时，我们可以很方便的使用官方提供的 [wx.navigateTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)，这个api进行页面的跳转，同时也可以在url中带一些参数，传到另外一个页面。

通过url传参，可以传输一些简单的数据，稍微复杂一点的也可以通过 [JSON.stringify()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)进行转换之后传值，在另外一个页面，需要使用 [JSON.parse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)** **来进行解析。

但是当我们需要传比较多的数据，或者一些特殊的字符串，url传参的方式就会出现错误，比如有一次我在使用url传参时，数据中有一个特殊符号 “&”，这样再通过url传参，到了另外一个页面，进行解析数据的时候，会将 “&” 理解为url中参数的分隔符，这样就会报错。那么我们还有什么方法可以传值到另外一个页面那？

微信小程序官方提供的 [wx.navigateTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html) ，这个api可以帮助我们传值，下面就让我们来试试吧！

原页面

```javascript
wx.navigateTo({
  url: 'test?id=1',
  events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log('1.原页面acceptDataFromOpenedPage获得的数据:', data)
        },
        someEvent: function (data) {
          console.log('2.原页面someEvent获得的数据', data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: '传递到test页面的数据' })
      }
})
```
通过wx.navigateTo()跳转到的页面

```javascript
//test.js
Page({
  onLoad: function(options){
    console.log('options.query',options.query)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', { data: 'test页面通过acceptDataFromOpenedPage传到原页面的数据' });
    eventChannel.emit('someEvent', { data: 'test页面通过someEvent传到原页面的数据' });
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log('3.上一页面通过eventChannel传送到当前页面的数据', data)
    })
  }
})
```

打印出来的信息

![图片](https://uploader.shimo.im/f/X9O6khprfTg0sAPV.png!thumbnail)

通过查看打印出来的信息，我们不难发现，

进入到test页面之后，首先调用了

```javascript
eventChannel.emit('acceptDataFromOpenedPage', { data: 'test页面通过acceptDataFromOpenedPage传到原页面的数据' });
```
传到原页面中，被打印了出来
```javascript
acceptDataFromOpenedPage: function (data) {
    console.log('1.原页面acceptDataFromOpenedPage获得的数据:', data)
},
```
然后test页面调用
```javascript
eventChannel.emit('someEvent', { data: 'test页面通过someEvent传到原页面的数据' });
```
传到原页面，被打印出来
```javascript
someEvent: function (data) {
    console.log('2.原页面someEvent获得的数据', data)
}
```
最后原页面调用
```javascript
success: function (res) {
    // 通过eventChannel向被打开页面传送数据
    res.eventChannel.emit('acceptDataFromOpenerPage', { data: '传递到test页面的数据' })
}
```
向test页面传递数据，被test页面接收到并打印出来
```javascript
eventChannel.on('acceptDataFromOpenerPage', function (data) {
      console.log('3.上一页面通过eventChannel传送到当前页面的数据', data)
    })
```
## 参考文档

[https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)

