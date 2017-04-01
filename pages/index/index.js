//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    state:true,
    motto1: '我等你很久啦！',
    motto2: '当你迷茫或者无奈的时候，心中默念你的疑问，然后点击上方的人生解答书吧！',
    img:"../../image/bookclose.jpg",
    userInfo: {},
    answer:' ',
    question:'尝试在这里输入你的疑问...',
    input_sts:'',
    button_sts:0,
   },
  
  bindKeyInput: function(e) {
    this.setData({question: e.detail.value})
  },


   //事件处理函数
  bindViewTap: function() {
 
     this.setData({ img: '../../image/bookopen.gif'})
     this.setData({userInfo:{}})
     this.setData({motto1: '正在打开请稍等!'})
     this.setData({motto2: ' '})

     this.setData({button_sts:1})
     this.setData({input_sts:'visibility: hidden;'})

     var start = new Date().getTime()
     while (new Date().getTime() < start + 2200);

      wx.redirectTo({ url: '../answer/answer' })
    },


  onLoad: function () {
    console.log('onLoad')
    var that = this

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
