// pages/search/search.js
const api = require("../../api/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList:[]
  },
  handleSearch(e){
    let val = e.detail.value;
    let _this = this;
    if(val != ""){
    wx:wx.request({
      url: api.search+'?q='+val,
     
      success: function(data) {
        _this.setData({
          infoList:data.data
        })
      }
    })
    }else{
      this.setData({
        infoList:[]
      })
    }
  },
handleDetail(e){
  let id = e.currentTarget.dataset.id;
  wx:wx.navigateTo({
    url: '/pages/detail/detail?id='+id,
   
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})