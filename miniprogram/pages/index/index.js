//引入 用来发送请求的方法
import { request } from "../../request/index.js";
Page({
    data: {
        swiperList: []
    },
    //options(Object)
    onLoad: function(options) {
        //1.发送异步请求获取轮播图数据
        // var reqTask = wx.request({
        //     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
        //     //data: {},不用发送数据给后台
        //     success: (result) => {
        //         this.setData({
        //             swiperList: result.data.message
        //         })
        //     },
        //     fail: () => {},
        //     complete: () => {}
        // });
        //promise封装
        request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata" })
            .then(result => {
                this.setData({
                    swiperList: result.data.message
                })
            })
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