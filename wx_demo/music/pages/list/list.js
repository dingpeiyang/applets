//logs.js
const util = require('../../utils/util.js')
const api = require("../../api/api.js");
Page({
  data:{
    list:[]
  },
   onLoad(options){
     let {id} = options;
    //  id = 2;
     let _this = this;
     wx.request({
       url: api.list +"?idx="+id,
       success:function(data){
         console.log(data.data.playlist.tracks.slice(0,10));

         _this.setData({
           list: data.data.playlist.tracks.slice(0, 10)
         })
       }
     })
   }
})
