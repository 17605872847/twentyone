
$(window).scroll(function(){
    var scorll=$(window).scrollTop();
    if(scorll>590){
        $('#sponsors img').css('filter','grayscale(0%)')
    }else{
        $('#sponsors img').css('filter','grayscale(100%)')
    }
})