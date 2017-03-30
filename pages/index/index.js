//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    state:true,
    motto1: '我等你很久啦！',
    motto2: '当你迷茫或者无奈的时候，心中默念你的疑问，然后点击上方的人生解答书吧！',
    img:"./img2.jpg",
    userInfo: {},
    answer:' ',
   },
  
   //事件处理函数
  bindViewTap: function() {
 
     this.setData({ motto1: ' '})
     this.setData({ motto2: ' '})
     this.setData({ img: './bookopen.gif'})
     this.setData({ userInfo:{}})

    if (!this.data.state)
    {
    
     this.setData({state:true})
     this.setData({ img: './bookclose.jpg'})
     this.setData({answer: ' '})
     this.setData({motto1: '希望我的答案对你有帮助!\n如果你还有什么困惑，再次点击打开这本神奇的书吧!'})

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
     return 
     }


    var count=parseInt(40*Math.random())
    var answer=new Array
    answer[1]='完全没有问题，放心吧！'
    answer[2]='正是好机会！'
    answer[3]='你会很累的。'
    answer[4]='问问你妈妈吧！'
    answer[5]='问问你爸爸吧！'
    answer[6]='我觉得你像咪蒙，真能瞎掰。'
    answer[7]='加油吧！'
    answer[8]='早点睡觉吧。'
    answer[9]='吃吃饱，然后开始吧！'
    answer[10]='我觉得尽力就好！'
    answer[11]='放松一下，然后再继续！'
    answer[12]='肯定可以的，就差一点点！'
    answer[13]='还是算了吧！'
    answer[14]='我觉得没有必要！'
    answer[15]='为什么要这样呢？'
    answer[16]='我觉得你是一个好人！'
    answer[17]='有意思吗？想这种问题！'
    answer[18]='吃一顿好的，听听音乐！'
    answer[19]='人生需要烦恼的太多，这个就别管他了！'
    answer[20]='好吧，哈哈！'
    answer[21]='算了吧！'
    answer[22]='有风险也有机会！'
    answer[23]='找个人给你点意见！'
    answer[24]='谁说的准呢？先观望着'
    answer[25]='把心揣在怀里。'
    answer[26]='请教一下你的爸爸。'
    answer[27]='去争取机会。'
    answer[28]='不要再等了。'
    answer[29]='执行力，懂不懂？'
    answer[30]='这个我不想多说了。'
    answer[31]='放心吧，没有问题的。'
    answer[32]='不可预测。'
    answer[33]='学会妥协。'
    answer[34]='不要害怕。'
    answer[35]='不确定因素有点多。'
    answer[36]='有时候就随波逐流吧。'
    answer[37]='有时候随波逐流不是好事情。'
    answer[38]='你需要一个承诺。'
    answer[39]='花更多的时间来决定。'
    answer[40]='你需要一点时间。'


    if (answer[count]=='')
    {
      answer[count]='饶了我吧，这种问题就别问我了！'
    }
     this.setData({answer:answer[count]})

     this.setData({state:false})
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
