$(function () {
    init();
    function init() {
        getSwiperData();
        getCatItems();
        getGoodslist();
    }
})


//获取去首页轮播图数据
function getSwiperData() {
    $.get('http://api.pyg.ak48.xyz/api/public/v1/home/swiperdata', function (res) {
        // console.log(res);
        var htmlStr = template('swiperTpl', {
            'arr': res.data
        })
        $('.mui-slider').html(htmlStr);
        //插件轮播图
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 1000
        });
    }, 'json')
}
//获取菜单导航栏数据
function getCatItems() {
    $.get('http://api.pyg.ak48.xyz/api/public/v1/home/catitems',function (res) {
        // console.log(res);
        var htmlStr=template('navTpl',{
            'arr':res.data
        });
        $('.index_nav').html(htmlStr);
    },'json')
}
//首页商品列表
function getGoodslist() {
    $.get('http://api.pyg.ak48.xyz/api/public/v1/home/goodslist',function (res) {
        console.log(res);
        
        var htmlStr=template('goodsTpl',{
            'arr':res.data
        });
        $('.index_goodlist').html(htmlStr);
    },'json')
}