// Echarts
var dom = document.getElementById('container')
var myChart = echarts.init(dom);
var data = [];
for (var i = 0; i <= 360; i++) {
    var t = i / 180 * Math.PI;
    var r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
}

option = {
    legend: {
        data: ['line']
    },
    polar: {
        center: ['50%', '54%']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0
    },
    radiusAxis: {
        min: 0
    },
    series: [{
        coordinateSystem: 'polar',
        type: 'line',
        showSymbol: false,
        data: data
    }],
    animationDuration: 2000
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
// Echarts

// resize事件action
$(window).resize(() => {
    $(window).width() <= 992 ? $('.content-box').css('padding-left','0px') : $('.content-box').css('padding-left','220px')
    $(window).width() <= 992 ? $('.content-down-left').css('width','100%') : $('.content-down-left').css('width','66.6%')
    $(window).width() <= 992 ? $('.content-down-right').css('width','100%') : $('.content-down-right').css('width','33.3%')
    $(window).width() <= 992 ? $('.Recentupdates').css('width','100%') : $('.Recentupdates').css('width','33.3%')
})


// resize事件end