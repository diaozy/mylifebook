//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto1: '等你很久啦，你总算来啦。',
    motto2: '心中默念你的疑问，然后点击上方的人生解答书吧！',
    img:"./bookclose.jpg",
    userInfo: {},
    answer:' '
   },
  
   //事件处理函数
  bindViewTap: function() {
    if(motoo1 != ' ')
    {exit}

     this.setData({ motto1: ' '})
     this.setData({ motto2: ' '})
     this.setData({ img: './bookopen.gif'})
     this.setData({ userInfo:{}})

    if ( parseInt(10*Math.random()) == 1)
    {
      this.setData({
      answer: '完全没有问题，放心吧！'})
    }
    else if(parseInt(10*Math.random()) == 2)
    {
      this.setData({
      answer: '正是好机会！'})
    }
    else if(parseInt(10*Math.random()) == 3)
    {
      this.setData({
      answer: '你会很累的。'})
    }
    else if(parseInt(10*Math.random()) == 4)
    {
      this.setData({
      answer: '问问你妈妈吧！'})
    }
    else if(parseInt(10*Math.random()) == 5)
    {
      this.setData({
      answer: '问问你爸爸吧！'})
    }
    else if(parseInt(10*Math.random()) == 6)
    {
      this.setData({
      answer: '我觉得你像咪蒙，真能写。'})
    }
    else if(parseInt(10*Math.random()) == 7)
    {
      this.setData({
      answer: '加油吧！'})
    }
    else if(parseInt(10*Math.random()) == 8)
    {
      this.setData({
      answer: '早点睡觉吧。'})
    }
    else if(parseInt(10*Math.random()) == 9)
    {
      this.setData({
      answer: '吃吃饱，然后开始吧！'})
    }
    else
    {
      this.setData({
      answer: '我回答不了！'})
    }
//    wx.navigateTo({
//    url: '../logs/logs'
//    })
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
