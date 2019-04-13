//index.js
//获取应用实例
const app = getApp()
const api = require('../../api/api.js')
Page({
  data:{
    longitude:'',
    latitude:'',
    markers: [{
      iconPath: '/resources/others.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    controls: [{
      iconPath: '/imgs/pin.png',
      position: {
        left: app.globalData.iw/2-12,
        top: (app.globalData.ih-114)/2,
        width: 22,
        height: 31
      },
      clickable: true
    },
      {
        id:1,
        iconPath: '/imgs/center.png',
        position: {
          left: 16,
          top: app.globalData.ih - 130,
          width: 34,
          height: 33
        },
        clickable: true
      }
    ]
  },
  onLoad(){
    var _this = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        _this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
    //获取发布信息
    wx.request({
      url: api.add,
      method:"get",
      success:function(data){
        let markers = _this.data.markers;
        var obj = {}
        data.data.map((item)=>{
          obj.iconPath = '/imgs/'+item.type+'.png';
          markers.push(item)
        })
        _this.setData({
          markers
        })
      }
    })
    //创建地图实例
    this.map = wx.createMapContext("map")
  },
controltap(){
  this.map.moveToLocation();
},
handlePublic(){
  wx.navigateTo({
    url: '/pages/public/public',
  })
},
handleSearch(){
  wx.navigateTo({
    url: '/pages/search/search',
  })
},
markertap(e){
  let id = e.markerId;
  wx:wx.navigateTo({
    url: '/pages/detail/detail?id='+id,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}
})