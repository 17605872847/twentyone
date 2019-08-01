var timer = null;
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
            alert('Game Over');
        }
    }, 1000)

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
        }, 450)
        if (time <= 1) {
            clearInterval(playgame);
        }
    }, 1000)

    var fenshu = 0;
    $('.game div img').click(function () {
        event.preventDefault();
        $('.game div img').animate({ 'top': '200px' }, 50)
        fenshu += 1;
        $('#fenshu').html(fenshu);
    })

    $('img').on('mousedown', function (e) {
        e.preventDefault()
    })
})


//console.log(arr.sort(()=>{ return 0.5 - Math.random()}));