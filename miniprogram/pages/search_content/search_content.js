const db=wx.cloud.database();
var myVlu="";
const _ = db.command

Page({
  /**
   * 页面的初始数据,可以为空
   */
  data: {

    dataList:[]

  },

  myIpt(res){
    var vlu=res.detail.value;
    myVlu=vlu
  },
   
  
  getData(){
    
    db.collection("all_needs").orderBy('time','desc').where(
      _.or(
        [
          {
            arrive_place:myVlu
          },
          {
            arrive_time:myVlu
          },
          {
            time:myVlu
          },
          {
            needs:myVlu
          },
          {
            money:myVlu
          }
        ]
      )
    )
    .get({
      success:res=>{
    
        this.setData({
          
          dataList:res.data

     })
    }
    })

},
  
  //提交表单添加进数据库
  
    btnSub(res){

        var{time,name,no,contact,money,arrive_time,arrive_place,needs}=res.currentTarget.dataset
        //console.log(res.currentTarget.dataset)
        
        
        db.collection("my_accept").add({
          data:{
            time:time,
            name:name,
            no:no,
            arrive_time:arrive_time,
            arrive_place:arrive_place,
            money:money,
            contact:contact,
            needs:needs,
    
            
          }
          
        })
        var id=res.currentTarget.dataset
        console.log(id.id)
        
        db.collection("all_needs").doc(id.id
        ).remove()

    var only_num =(wx.getStorageSync('only_num'))
    console.log(only_num)
    db.collection("my_publish").add({
      data:{
        time:time,
        arrive_time:arrive_time,
        arrive_place:arrive_place,
        needs:needs,
        name:name,
        no:no,
        money:money,
        contact:contact,
        receiver:only_num
        
      }
      
    })
        
    },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
    //this.getData(5,0);
    
  },  
  

/**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //var page=this.data.dataList.length
    //this.getData(5,page)

  },
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

