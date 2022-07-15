//Page Object
Page({
    data: {
        swiperList: []
    },
    //options(Object)
    onLoad: function(options) {
        //1.发送异步请求获取轮播图数据
        var reqTask = wx.request({
            url: 'http://api.zbztb.cn/api/public/v1/home/swiperdata',
            //data: {},不用发送数据给后台
            success: (result) => {
                console.log(result);
            },
            fail: () => {},
            complete: () => {}
        });

    },
    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap: function(item) {

    }

});