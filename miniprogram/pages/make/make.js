var status = true;
var util = require('../../utils/util.js');

const db=wx.cloud.database();
Page({
  toastShow: function(event) {
    console.log("触发了点击事件，弹出toast")
    status = false
    this.setData({status:status})　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide:function(event){
      console.log("触发bindchange，隐藏toast")
      status =true
      this.setData({status:status})
  },
  /**
   * 页面的初始数据
   */
  data: {

    status:status

  },

  btnSub(res){
   // console.log(121212)
    var {time,arrive_time,arrive_place,needs,name,no,contact,money} = res.detail.value;
    var time = util.formatTime(new Date());
    console.log(121212)
    console.log(res.detail.value)
    if(!res.detail.value.arrive_time||!res.detail.value.arrive_place||!res.detail.value.contact||!res.detail.value.money||!res.detail.value.needs||!res.detail.value.no||!res.detail.value.name){
      console.log(1)
    }else{
    db.collection("all_needs").add({
      data:{
        name:name,
        money:money,
        no:no,
        contact:contact,
        time:time,
        arrive_time:arrive_time,
        arrive_place:arrive_place,
        needs:needs
      }
    })
    var id=res.currentTarget.dataset
   // console.log(id.id)

    db.collection("my_h_publish").add({
      data:{
        name:name,
        money:money,
        no:no,
        contact:contact,
        time:time,
        arrive_time:arrive_time,
        arrive_place:arrive_place,
        needs:needs,
        id:id.id
      }
    })

    }
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

  },

  exit:function(e){
    wx.showModal({
      title: '提示',
      content: '已提交',
      showCancel:false,
      
    })
  },
})