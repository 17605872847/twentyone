var timer = null;
$('#play').click(function () {
    var user="lala";
    localStorage.setItem("lala", 0);
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
            alert('Game Over 您的分数为:'+localStorage.getItem('lala',fenshu));
            var ll=localStorage.getItem('lala',fenshu)
            console.log(ll)
            $('#lalala').append("<li>"+user+"&nbsp;"+ll+"分"+"</li>")
        }
    }, 200)

    var arr = [timg_1, timg_2, timg_3, timg_4, timg_5, timg_6, timg_7, timg_8, timg_9];
    var playgame = null;
    var lala = null;
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
    }, 800)

    $('.game div img').click(function () {
        event.preventDefault();
        $(this).animate({ 'top': '200px' }, 50)
        fenshu += 1;
        $('#fenshu').html(fenshu);
        // var a=fenshu;
        localStorage.setItem("lala", fenshu);
    })

    $('img').on('mousedown', function (e) {
        e.preventDefault()
    })
})
//设置：

// localStorage.dat = '456';

//获取：

//删除
// localStorage.removeItem("dat");

//console.log(arr.sort(()=>{ return 0.5 - Math.random()}));

