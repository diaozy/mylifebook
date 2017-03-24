//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto1: '等你很久啦，你总算来啦。',
    motto2: '心中默念你的疑问，然后点击上方的人生解答书吧！',
    userInfo: {},
   },
  
   //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
