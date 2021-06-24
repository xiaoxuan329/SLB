const db=wx.cloud.database();
Page({
  /**
   * 页面的初始数据,可以为空
   */
  data: {

    dataList:[]

  },
   

  getData(num=5,page=0){

    db.collection("my_comment").skip(page).orderBy('time','desc').limit(num).get({
      success:res=>{
        //console.log(res.data)
        var oldData=this.data.dataList
        //console.log(oldData)
        var newData=oldData.concat(res.data)
        //console.log(newData)
        this.setData({
          
          dataList:newData
          //dataList:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    this.getData(5,0);
    
  },  

/**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var page=this.data.dataList.length
    this.getData(5,page)

  },


})
