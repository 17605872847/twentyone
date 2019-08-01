    //页面宽度变化
    $(window).resize(function () {
        $(window).width() > 1300 ? $('.content').css({ 'margin-left': 'auto' }) : $('.content').css({ 'margin-left': '250px', 'width': '100%' })
    })
    //页面宽度变化

    $('.sidebar-link').hover(function () {
        $(this).css('border-bottom',"3px solid #42b983")
        }, function () {
        $(this).css('border-bottom',"none")
        }
    );

