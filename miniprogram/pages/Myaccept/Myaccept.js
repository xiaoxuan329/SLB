const db=wx.cloud.database();
var myVlu="";
Page({
  /**
   * 页面的初始数据,可以为空
   */
  data: {

    dataList:[]

  },
   

  getData(num=5,page=0){

    db.collection("my_accept").skip(page).limit(num).orderBy('time','desc').get({
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

  myIpt(res){
    var vlu=res.detail.value;
    myVlu=vlu
  },

  subData(res){

    var{time,arrive_time,arrive_place,needs,name,no,contact,money}=res.currentTarget.dataset
    
    db.collection("my_comment").add({
      data:{
        name:name,
        money:money,
        no:no,
        contact:contact,
        time:time,
        arrive_time:arrive_time,
        arrive_place:arrive_place,
        needs:needs,
        my_comment:myVlu
      }
      
    })

  },
  del(res){
    var id=res.currentTarget.dataset
    //console.log(id.id)
    db.collection("my_accept").doc(id.id
    ).remove()
    
    var time=res.currentTarget.dataset
    db.collection("my_publish").where({
      time:time.time
    }).remove().then(res=>{
      console.log(res)
    })

    
    
    

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    this.getData(5,0);
    //this.del();
    
  },  
  

/**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var page=this.data.dataList.length
    this.getData(5,page)

  },
  exit:function(e){
    wx.showModal({
      title: '提示',
      content: '确认已完成？',
      success: function (res) {
        if (res.confirm) {
           wx.redirectTo({
            url: '../Myaccept/Myaccept',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  exit_2:function(e){
    wx.showModal({
      title: '提示',
      content: '已提交',
      showCancel:false

    })
  },


})
