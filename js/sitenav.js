$(function () {
    var mmb = new MMB();
    mmb.setScroll();
    mmb.querySitenav();
})
var MMB = function () {};
MMB.prototype = {
    /* 初始化scroll控件 */
    setScroll: function () {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005
        });
    },

    querySitenav: function () { 
        $.ajax({
            url: 'http://localhost:9090/api/getsitenav',
            success: function (result) { 
                console.log(result);
                var html = template('sitenavTpl',result);
                console.log(html);
                $('.sitenavList').html(html);
            }
        })
     }


}