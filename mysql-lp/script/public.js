$(document).ready(function () {
    // 三级菜单action
    $(".list_dt").click(function () {
        $('.list_dd').stop();
        $(this).siblings("dt").removeAttr("id");
        if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp();
        } else {
            $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
        }
    });

    $(".list_dtt").click(function () {
        $('.list_dd').stop();
        $(this).siblings("dt").removeAttr("id");
        if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp();
        } else {
            $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
        }
    });
    // 三级菜单end

    //公共小箭头侧边栏收起action
    $(".icon-shrink-right").click(function () {
        $('.list_dd').stop();
        $('.list_dd').siblings("dt").removeAttr("id");
        if ($('.list_dd').attr("id") == "open") {
            $('.list_dd').removeAttr("id").siblings("dd").slideUp();
        } else {
            $('.list_dd').attr("id", "open").next().slideDown().siblings("dd").slideUp();
        }
    });
    //公共小箭头侧边栏收起end

    $('.list_dt').click(function () {
        if ($('.right-column-box').width() <= 56) {
            $('.right-column-box').css('width', '220px')
            $('.head').css("padding-left", '220px')
            $('.console-one').css({
                "padding-left": '220px'
            })
            $('.icon-shrink-right').css('transform', 'rotate(0deg)')
            $('.logo').css('left', '0px')
            $('.content-down-box').css('padding-left', '0px');
        } else {

        }
    })

    $('.list_dtt').click(function () {
        if ($('.right-column-box').width() <= 56) {
            $('.right-column-box').css('width', '220px')
            $('.head').css("padding-left", '220px')
            $('.console-one').css({
                "padding-left": '220px'
            })
            $('.icon-shrink-right').css('transform', 'rotate(0deg)')
            $('.logo').css('left', '0px')

        } else {

        }
    })

    $('.list_li').click(function () {
        $(this).css('background', '#009688').css('color', 'white');
        $(this).siblings('li').css('background', 'none').css('color', '#a9a9ad')
    })

    // 公共箭头icon样式action
    $('.icon-shrink-right').click(function () {
        if (Math.round($('.right-column-box').width()) <= 56) {
            $('.right-column-box').width('220px')
            $('.head').css("padding-left", '220px')
            $(this).css('transform', 'rotate(0deg)')
            $('.logo').css('left', '0px')
            $('.content-down-box').css('left', '0px');
            $('.content-box').css('padding-left', '220px');
        } else {
            $('.right-column-box').width('56px')
            $('.head').css({
                "padding-left": '56px'
            })
            $(this).css('transform', 'rotate(180deg)')
            $('.logo').css('left', '-163px')
            $('.content-box').css('padding-left', '56px');
        }
    })
    // 公共箭头icon样式end

    //浏览器窗口缩小action
    $(window).resize(() => {
        $(window).width() <= 992 ? $('.right-column-box').css('width', '0px') : $('.right-column-box').css(
            'width', '220px')
        $(window).width() <= 992 ? $('.head').css({
            "padding-left": '0px'
        }) : $('.head').css({
            "padding-left": '220px'
        })
        $(window).width() <= 992 ? $('.head').css({
            "padding-left": '0px'
        }) : $('.head').css({
            "padding-left": '220px'
        })
        $(window).width() <= 992 ? $('.logo').css('left', '-220px') : $('.logo').css('left', '0px')
        $(window).width() <= 992 ? $('.content-box').css({
            "padding-left": '0px'
        }) : $('.content-box').css({
            "padding-left": '220px'
        })
        $(window).width() <= 992 ? $('.console-one-left').css({
            "width": '100%',
            "height": '1510px'
        }) : $('.console-one-left').css({
            "width": '65%',
            "height": '1250px'
        })
        $(window).width() <= 992 ? $('.console-one-left-down').css({
            "height": '1510px',
            "margin-top": '15px'
        }) : $('.console-one-left-down').css({
            "height": '945px',
            "margin-top": '2px'
        })
        $(window).width() <= 992 ? $('.console-one-left-shortcut-box').css({
            "width": '100%',
            "margin-bottom": '15px'
        }) : $('.console-one-left-shortcut-box').css({
            "width": '50%',
            "margin-bottom": '0px'
        })
        $(window).width() <= 992 ? $('.console-one-left-matter-box').css({
            "width": '100%'
        }) : $('.console-one-left-matter-box').css({
            "width": '50%'
        })
        $(window).width() <= 992 ? $('.console-one-right').css({
            "width": '100%'
        }) : $('.console-one-right').css({
            "width": '35%'
        })

    })
    //浏览器窗口缩小end


    // 浏览器全屏action
    $('.icon-quanping').click(function () {
        var docElm = document.documentElement;
        if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
            $('.icon-shrink-right').css('transform', 'rotate(0deg)')
        }
        if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    })
    // 浏览器全屏end
})