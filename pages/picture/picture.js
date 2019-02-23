// pages/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictureArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getPictureData();
  },
  getPictureData: function() { //获取图片数据
    wx.request({
      url: 'https://interview.westmatrix.cn/api/v1/picture',
      method: 'POST',
      data: {},
      success: res => {
        // console.log(res.data);
        this.data.pictureArray = res.data;
        this.setData({
          pictureArray: res.data
        })
      }
    })
  },
  clickInfo: function(e) { //点击跳转对应详情
    let id = Number(e.currentTarget.id);
    wx.setStorageSync("pictureInfo", this.data.pictureArray[id]); //对应的数据存在缓存里
    wx.navigateTo({
      url: '../pictureInfo/pictureInfo',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.showLoading({
      title: '正在刷新...',
    })
    this.getPictureData();
    wx.stopPullDownRefresh();
    wx.hideLoading();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})