$(function(){
var username=$('#user');
var use=null;
var timer = null;
$('#login').click(function(){
    console.log(this)
    if(username.val()!=0){
        $(location).attr('href','play.html');
        sessionStorage.setItem('lala',username.val())
    }
})
    
$('#play').click(function () {
    var time = 30;
    var fenshu = 0;
    $('#fenshu').html(fenshu)
    $('#play p').hide();
    $('#time').html(time);
    var timer = setInterval(function () {
        time -= 1;
        $('#time').html(time);
        if (time <= 0) {
            clearInterval(timer);
            $('#play p').show();
            alert('Game Over 您的分数为:'+fenshu);
            var ll=sessionStorage.getItem('lala')
            console.log(ll)
            $('#lalala').append("<li>"+ll+"&nbsp;"+fenshu+"分"+"</li>")
        }
    }, 1000)

    var playgame = null;
    var lala = null;
    var arr = $('.game div img')
    clearInterval(playgame);
    playgame = setInterval(function () {
        var index = Math.floor((Math.random() * arr.length));
        console.log(index)
        $(arr[index]).animate({ 'top': '80px' }, 300)
        // lala = setInterval(function () {
        //     $(arr[index]).animate({ 'top': '200px' }, 300)
        // }, 700)
        lala = setTimeout(function () {
            $(arr[index]).animate({ 'top': '200px' }, 300)
        }, 480)
        if (time <= 1) {
            clearInterval(playgame);
        }
    }, 1000)

    $('.game div img').click(function () {
        event.preventDefault();
        $(this).animate({ 'top': '200px' }, 50)
        fenshu += 1;
        $('#fenshu').html(fenshu);
        // var a=fenshu;
        
    })

    $('img').on('mousedown', function (e) {
        e.preventDefault()
    })
})
})
//设置：

// sessionStorage.dat = '456';

//获取：

//删除
// sessionStorage.removeItem("dat");

//console.log(arr.sort(()=>{ return 0.5 - Math.random()}));

