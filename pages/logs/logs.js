//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    answer:' '
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
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

  }
})
