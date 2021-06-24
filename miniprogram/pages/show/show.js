// pages/show/show.js
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getData(){
    var only_num =(wx.getStorageSync('only_num'))
    
    db.collection("my_information")
    .where(
      {
        no:only_num
      }
      )
    
    
   .get({
      success:res=>{
        console.log(res.data)
        this.setData({
          
          dataList:res.data
        })
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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