$()
    // 今日热搜action
    $('.TopIntroduction2 p').click(function () {
        $(this).css({
            "border-bottom": '2px solid #009688'
        })
        $(this).siblings().css({
            "border-bottom": 'none'
        })
    })
    // 今日热搜end

    // ECharts图action
    // ECharts1图action
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
    // EChart图1end

    // EChart图2action
    var dom = document.getElementById("containe");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '90%',
            center: ['50%', '50%'],
            data: [{
                value: 335,
                name: '直接访问'
            },
            {
                value: 310,
                name: '邮件营销'
            },
            {
                value: 274,
                name: '联盟广告'
            },
            {
                value: 235,
                name: '视频广告'
            },
            {
                value: 400,
                name: '搜索引擎'
            }
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    // EChart图2end

    // EChart图action
    var dom = document.getElementById("contain");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '极坐标系下的堆叠柱状图';

    option = {
        angleAxis: {},
        radiusAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四'],
            z: 10
        },
        polar: {},
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
        }, {
            type: 'bar',
            data: [2, 4, 6, 8],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['A', 'B', 'C']
        }
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    // EChart图3end
    // EChart图end

    // 快捷方式hover效果action
    $('.TopIntroduction-content1-two-hover').hover(function () {
        $('.TopIntroduction-content1-two').css('left', '0px')
        $('.TopIntroduction-content1').css('left', '-100%')
        $('.TopIntroduction-content1-hover').css('backgroundColor', '#e2e2e2')
        $(this).css('backgroundColor', '#999')
    })

    $('.TopIntroduction-content1-hover').hover(function () {
        $('.TopIntroduction-content1-two').css('left', '100%')
        $('.TopIntroduction-content1').css('left', '0px')
        $('.TopIntroduction-content1-two-hover').css('backgroundColor', '#e2e2e2')
        $(this).css('backgroundColor', '#999')
    })
    // 快捷方式hover效果end

    //待办事项hover效果action
    $('.console-one-left-matter-hover').hover(function () {
        $('.TopIntroduction-content2-two').css('left', '100%')
        $('.TopIntroduction-content2').css('left', '0px')
        $('.console-one-left-mattertwo-hover').css('backgroundColor', '#e2e2e2')
        $(this).css('backgroundColor', '#999')
    })

    $('.console-one-left-mattertwo-hover').hover(function () {
        $('.TopIntroduction-content2-two').css('left', '0px')
        $('.TopIntroduction-content2').css('left', '-100%')
        $('.console-one-left-matter-hover').css('backgroundColor', '#e2e2e2')
        $(this).css('backgroundColor', '#999')
    })
    //待办事项hover效果end

    //数据概览hover效果action
    $('.TopIntroduction-content3-one-hover').hover(function () {
        $('#container').css('display', 'block')
        $('#containe').css('display', 'none')
        $('#contain').css('display', 'none')
        $('.TopIntroduction-content3-two-hover').css('backgroundColor', '#e2e2e2')
        $('.TopIntroduction-content3-three-hover').css('backgroundColor', '#e2e2e2')
        $(this).css('backgroundColor', '#999')
    })

    $('.TopIntroduction-content3-two-hover').hover(function () {
        $('#container').css('display', 'none')
        $('#containe').css('display', 'block')
        $('#contain').css('display', 'none')
        $('.TopIntroduction-content3-one-hover').css('backgroundColor', '#e2e2e2')
        $('.TopIntroduction-content3-three-hover').css('backgroundColor', '#e2e2e2')
        $(this).css('backgroundColor', '#999')
    })

    $('.TopIntroduction-content3-three-hover').hover(function () {
        $('#container').css('display', 'none')
        $('#containe').css('display', 'none')
        $('#contain').css('display', 'block')
        $('.TopIntroduction-content3-one-hover').css('backgroundColor', '#e2e2e2')
        $('.TopIntroduction-content3-two-hover').css('backgroundColor', '#e2e2e2')
        $(this).css('backgroundColor', '#999')
    })
    //数据概览hover效果end

    //产品动态效果action
    var rgb = document.getElementById('ProductDynamics-content-text-one');
    var color = ['#009688', '#1E9FFF', '#ff5722'];
    var b = 0
    setInterval(function working() {
        if (b < 3) {
            rgb.style.background = color[b];
            b++;
        } else {
            b = 0;
        }
    }, 1000);

    var ball = document.getElementById('Balloption-two'); //圆球父级
    var lis = ball.getElementsByTagName('li')[0]; //圆球
    var colo = ['#009688', '#1E9FFF', '#ff5722'];
    var a = 0;
    setInterval(function show() {
        if (a < 3) {
            lis.style.background = colo[a];
            a++;
        } else {
            a = 0;
        }
    }, 1000)
    //产品动态效果end