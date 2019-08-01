//滚动条左侧变化
var arr = [jcyf,wb,dhwb,fxk,dxan,szk,zbd,fxk1,dxan1,szk1,xsf,lazy,number,trim,zzjssy]
$(window).scroll(function () {//为页面添加页面滚动监听事件
    var wst = $(window).scrollTop(); //滚动条距离顶端值 
    for (var i = 0; i < arr.length; i++) { //加循环
        if ($("#" + arr[i].id).offset().top <= wst + 1) { //判断滚动条位置
            console.log(arr[i]);
            $('.section-link').removeClass('active');
            $("." + arr[i].id).addClass("active");
        }
    }
});
//滚动条左侧变化