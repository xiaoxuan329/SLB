const db=wx.cloud.database();

Page({
  /**
   * 页面的初始数据,可以为空
   */
  data: {

    dataList:[]

  },
   
  
  getData(){
    //console.log(1)
    db.collection("all_needs").orderBy('time','desc').get({
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
  //提交表单添加进数据库
  
  btnSub(res){

    var{time,arrive_time,arrive_place,needs,name,no,money,contact}=res.currentTarget.dataset
    //console.log(hhh)
    console.log(res.currentTarget.dataset)
    
    
    db.collection("my_accept").add({
      data:{

        time:time,
        arrive_time:arrive_time,
        arrive_place:arrive_place,
        needs:needs,
        name:name,
        no:no,
        money:money,
        contact:contact
        
      }
      
    })
    var id=res.currentTarget.dataset
    console.log(id.id)
    
    db.collection("all_needs").doc(id.id
    ).remove()

    
    
},

  




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
    console.log(1)
   this.getData(5,0);
    
  }, 

  onShow: function(options){
    //this.getData(5,0);
    console.log(2)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log(111111)
    this.onLoad();
    

  },
  onPullDownRefresh:function(){
    //显示顶部刷新图标
        wx.showNavigationBarLoading();
      //要刷新请求服务器的方法
       this.getData();
     //隐藏导航栏加载框
       wx.hideNavigationBarLoading();
      //停止下拉事件
       wx.stopPullDownRefresh();
},

 

/**
   * 页面上拉触底事件的处理函数
   */
  /*
  onReachBottom: function () {
    var page=this.data.dataList.length
    this.getData(5,page)

  },*/
  exit:function(e){
    wx.showModal({
      title: '提示',
      content: '已接受',
      showCancel:false,
      
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          //wx.removeStorageSync('student');

          


          //页面跳转
          
          wx.redirectTo({
            url: '../Myaccept/Myaccept',
          })
        } 
      }
    })
  },


})

