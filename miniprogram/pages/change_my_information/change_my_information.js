// pages/change_my_information/change_my_information.js
const db=wx.cloud.database();
var status = true;
Page({
  toastShow: function(event) {
    console.log("触发了点击事件，弹出toast")
    status = false
    this.setData({status:status})　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
    wx.redirectTo({
      url: '../self/self',
    })
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
 
  //提交表单添加进数据库
  btnSub(res){

    var {no,name,sex,classname,departmentname} = res.detail.value;
    //console.log(res.detail.value)
    var only_num =(wx.getStorageSync('only_num'))
    db.collection("my_information").where(
      {
        no:only_num
      }).update({
      data:{
        
        name:name,
        sex:sex,
        classname:classname,
        departmentname:departmentname
      }
    })
    
},

exit:function(e){
  wx.showModal({
    title: '提示',
    content: '已修改',
    showCancel:false,
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