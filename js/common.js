$(function () {
    var BaseUrl = "http://api.pyg.ak48.xyz/api/public/v1/";
    // 拦截器
    $.ajaxSettings.beforeSend = function (xhr, obj) {
        obj.url = BaseUrl + obj.url;
    }
})