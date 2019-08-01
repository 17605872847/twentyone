$(window).resize(() => {
    $(window).width() <= 992 ? $('.content-box').css('padding-left','0px') : $('.content-box').css('padding-left','220px')
    $(window).width() <= 992 ? $('.content-down-left').css('width','100%') : $('.content-down-left').css('width','50%')
    $(window).width() <= 992 ? $('.content-down-right').css('width','100%') : $('.content-down-right').css('width','50%')
})

