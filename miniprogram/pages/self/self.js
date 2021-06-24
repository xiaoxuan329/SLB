// // Page({
 
// //   /**
// //    * 页面的初始数据
// //    */
// //   data: {
// //     // onPullDownRefresh: function () {
// //     //   wx.stopPullDownRefresh()
// //     // },
// //     myinfo:null
  
// //   },
 
// //   /**
// //    * 生命周期函数--监听页面加载
// //    */
// //   onLoad: function (options) {
// //     var stu = wx.getStorageSync('student');
// //     this.setData({ item: stu });
// //     // console.log(this.data.myinfo);
// //   },
  
// //   exit:function(e){
// //     wx.showModal({
// //       title: '提示',
// //       content: '是否确认填写',
// //       success: function (res) {
// //         if (res.confirm) { 
// //           // console.log('用户点击确定')
// //           wx.removeStorageSync('student');
// //           //页面跳转
// //           wx.redirectTo({
// //             url: '../login/login',
// //           })
// //         } else if (res.cancel) {
// //           console.log('用户点击取消')
// //         }
// //       }
// //     })
// //   },
  
// // resetpwd:function(e){
// //     var no=this.data.myinfo.no;
// //     wx.navigateTo({
// //       url: '../password/password?no=' + no,
// //     })
// //   },
// //   setemail: function (e) {
// //     var no = this.data.myinfo.no;
// //     wx.navigateTo({
// //       url: '../email/email?no=' + no,
// //     })
// //   }
// // })


// const db=wx.cloud.database();

// Page({
 
//   /**
//    * 页面的初始数据
//    */
//   data: {
//     // onPullDownRefresh: function () {
//     //   wx.stopPullDownRefresh()
//     // },
//     //dataObj:""
  
//   },
  

 
// getData(){

//   db.collection("my_information").limit(1).get({
//     success:res=>{
//       console.log(res.data)
//       this.setData({
        
//         dataList:res.data
//       })
//     }
//   })
// },

 
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
    
    
//     this.getData();
    
//   },
  
  
//   exit:function(e){
//     wx.showModal({
//       title: '提示',
//       content: '是否确认填写',
//       success: function (res) {
//         if (res.confirm) {
//           // console.log('用户点击确定')
//           wx.removeStorageSync('student');
//           //页面跳转
//           wx.redirectTo({
//             url: '../change_my_information/change_my_information',
//           })
//         } else if (res.cancel) {
//           console.log('用户点击取消')
//         }
//       }
//     })
//   },

//   exit1:function(e){
//     wx.showModal({
//       title: '提示',
//       content: '是否确认填写',
//       success: function (res) {
//         if (res.confirm) {
//           // console.log('用户点击确定')
//           wx.removeStorageSync('student');
//           //页面跳转
//           wx.redirectTo({
//             url: '../login/login',
//           })
//         } else if (res.cancel) {
//           console.log('用户点击取消')
//         }
//       }
//     })
//   },

// resetpwd:function(e){
//     var no=this.data.myinfo.no;
//     wx.navigateTo({
//       url: '../password/password?no=' + no,
//     })
//   },
//   setemail: function (e) {
//     var no = this.data.myinfo.no;
//     wx.navigateTo({
//       url: '../email/email?no=' + no,
//     })
//   }
// })

const db=wx.cloud.database();

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
    //dataObj:""
  
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

    exit:function(e){
    wx.showModal({
      title: '提示',
      content: '是否确认填写',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('student');
          //页面跳转
          wx.redirectTo({
            url: '../change_my_information/change_my_information',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  exit1:function(e){
    wx.showModal({
      title: '提示',
      content: '是否确认填写',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('student');
          //页面跳转
          wx.redirectTo({
            url: '../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /*
  exit:function(e){
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.removeStorageSync('student');
          //页面跳转
          wx.redirectTo({
            url: '../Myaccept/Myaccept',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },*/

  
})