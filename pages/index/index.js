//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    state:0,
    motto1: '亲爱的，等你很久啦！',
    motto2: '是否碰到了困惑或者无奈，心中默念你的疑问，然后打开人生解答书吧！',
    img:"../../images/bookclose.jpg",
    userInfo: {},
    answer:' ',
    question:'',
    input_sts:'',
    button_sts:0,
   },
  
  bindKeyInput: function(e) {
    this.setData({question: e.detail.value})
  },

  onShareAppMessage: function () {
    return {
      title: '我困惑时就打开了这本书...',
      path: '/pages/index/index',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },
  

   //事件处理函数
  bindViewTap: function() {
 
     this.setData({ img: '../../images/bookopen.gif'})
     this.setData({userInfo:{}})
     this.setData({motto1: '正在打开，请稍等!'})
     this.setData({motto2: ' '})

     this.setData({button_sts:1})
     this.setData({input_sts:'visibility: hidden;'})

     var start = new Date().getTime()
     while (new Date().getTime() < start + 2200);

      wx.redirectTo({ url: '../answer/answer?question='+this.data.question })
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
