$(window).resize(() => {
    $(window).width() <= 992 ? $('.content-box').css('padding-left', '0px') : $('.content-box').css('padding-left', '220px')
    $(window).width() <= 992 ? $('.content-down-left').css('width', '100%') : $('.content-down-left').css('width', '50%')
})


// 从最底部往上滑入action
$('.anim-up').click(function () {
    $('.anim-up').css({
        'top': '120px',
        'opacity': '.6'
    })
        $('.anim-up').stop().animate({
            'top': '0px',
            'opacity': '1'
        }, 250)
})
// 从最底部往上滑入end


// 微微往上滑入action
$('.anim-upbit').click(function () {
    $('.anim-upbit').css({
        'top': '30px',
        'opacity': '.7'
    })
        $('.anim-upbit').stop().animate({
            'top': '0px',
            'opacity': '1'
        }, 250)
})
// 微微往上滑入end


// 平滑放大action
$('.anim-scale').click(function(){

})
// 平滑放大end

//弹簧式放大action
$('.anim-scaleSpring').click(function(){

})
//弹簧式放大end


// 渐现action
$('.anim-fadein').click(function(){
    $('.anim-fadein').animate({'opacity':'0'},50);
    $('.anim-fadein').animate({'opacity':'1'},100);
})
//渐现end

//渐隐action
$('.anim-fadeout').click(function(){
    $('.anim-fadeout').animate({'opacity':'0'},500);
    $('.anim-fadeout').animate({'opacity':'0'},500);
    $('.anim-fadeout').animate({'opacity':'1'},50);
})
//渐隐end

//360度旋转action
var rot=1;
$('.anim-rotate').click(function(){
    rot++;
    if(rot % 2 ==0){
        $('.anim-rotate').css({'transform':'rotate(360deg)','transition':'all 2s'})
    }else{
        $('.anim-rotate').css({'transform':'rotate(0deg)','transition':'all 0s'})
    }  
})
//360度旋转end


// 循环动画action
var a = 1;
var xz=0;
var b =null;
$('.anim-rotatea').click(function () {
    if (a % 2 == 1) {
        clearInterval(b);
         b = setInterval(function(){
            xz+=3;
            $('.anim-rotatea').css({'transform':'rotate('+xz+'deg)'});
        },5)
    } else {
        clearInterval(b);
        $('.anim-rotatea').css('transform','rotate(0deg)');
    }
    a++;
})
// 循环动画end