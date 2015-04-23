require.config({
    packages: [
        {
            name: 'echarts',
            location: '//ecomfe.github.io/echarts/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: '//ecomfe.github.io/zrender/src',
            main: 'zrender'
        }
    ]
});

var mapOption = {
    title : {
        text: 'Kasus Korupsi di Indonesia Berdasarkan Provinsi (Semester I 2014)',
        subtext: 'Data from ICW',
        sublink: 'http://www.census.gov/popest/data/datasets.html',
        x:'right'
    },
    tooltip : {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        formatter : function (params) {
            var value = (params.value + '').split('.');
            value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            return params.seriesName + '<br/>' + params.name + ' : ' + value;
        }
    },
    dataRange: {
        x : 'right',
        min: 500000,
        max: 38000000,
        color: ['orangered','yellow','lightskyblue'],
        text:['High','Low'],
        calculable : true
    },
    toolbox: {
        show : true,
        //orient : 'vertical',
        x: 'left',
        y: 'top',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name: 'USA PopEstimates',
            type: 'map',
            roam: true,
            mapType: 'USA',
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            textFixed : {
                Alaska : [20, -20]
            },
            data:[
                {NAME_1 : 'Aceh', value : 20000000},
                {name : 'Nanggroe Aceh Darussalam', value : 4822023},
                {name : 'Alaska', value : 731449},
                {name : 'Arizona', value : 6553255},
                {name : 'Arkansas', value : 2949131},
                {name : 'California', value : 38041430},
                {name : 'Colorado', value : 5187582},
                {name : 'Connecticut', value : 3590347},
                {name : 'Delaware', value : 917092},
                {name : 'District of Columbia', value : 632323},
                {name : 'Florida', value : 19317568},
                {name : 'Georgia', value : 9919945},
                {name : 'Hawaii', value : 1392313},
                {name : 'Idaho', value : 1595728},
                {name : 'Illinois', value : 12875255},
                {name : 'Indiana', value : 6537334},
                {name : 'Iowa', value : 3074186},
                {name : 'Kansas', value : 2885905},
                {name : 'Kentucky', value : 4380415},
                {name : 'Louisiana', value : 4601893},
                {name : 'Maine', value : 1329192},
                {name : 'Maryland', value : 5884563},
                {name : 'Massachusetts', value : 6646144},
                {name : 'Michigan', value : 9883360},
                {name : 'Minnesota', value : 5379139},
                {name : 'Mississippi', value : 2984926},
                {name : 'Missouri', value : 6021988},
                {name : 'Montana', value : 1005141},
                {name : 'Nebraska', value : 1855525},
                {name : 'Nevada', value : 2758931},
                {name : 'New Hampshire', value : 1320718},
                {name : 'New Jersey', value : 8864590},
                {name : 'New Mexico', value : 2085538},
                {name : 'New York', value : 19570261},
                {name : 'North Carolina', value : 9752073},
                {name : 'North Dakota', value : 699628},
                {name : 'Ohio', value : 11544225},
                {name : 'Oklahoma', value : 3814820},
                {name : 'Oregon', value : 3899353},
                {name : 'Pennsylvania', value : 12763536},
                {name : 'Rhode Island', value : 1050292},
                {name : 'South Carolina', value : 4723723},
                {name : 'South Dakota', value : 833354},
                {name : 'Tennessee', value : 6456243},
                {name : 'Texas', value : 26059203},
                {name : 'Utah', value : 2855287},
                {name : 'Vermont', value : 626011},
                {name : 'Virginia', value : 8185867},
                {name : 'Washington', value : 6897012},
                {name : 'West Virginia', value : 1855413},
                {name : 'Wisconsin', value : 5726398},
                {name : 'Wyoming', value : 576412},
                {name : 'Puerto Rico', value : 3667084}
            ]
        }
    ]
};

var modusOption = {
    title : {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['2011年', '2012年']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['巴西','印尼','美国','印度','中国','世界人口(万)']
        }
    ],
    series : [
        {
            name:'2011年',
            type:'bar',
            data:[18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name:'2012年',
            type:'bar',
            data:[19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};

require(
    [
        'echarts',
        'echarts/chart/map',
        'echarts/chart/bar'
    ],
    function (ec) {
        require('echarts/util/mapData/params').params.USA = {
		    getGeoJson: function (callback) {
                $.getJSON('assets/js/geojson.json', callback); // Offline
                // $.getJSON('//bitbucket.org/rifani/geojson-political-indonesia/raw/0e89dcb0b0454c5afffd414fd0cd0c25f1688d10/IDN_adm_1_province.json', callback); // Online
		    }
		}

        var mapChart = ec.init(document.getElementById('map'));


        mapChart.setOption(mapOption);

        var modusChart = ec.init(document.getElementById('modus-chart'));
        modusChart.setOption(modusOption);

        var sectorChart = ec.init(document.getElementById('sector-chart'));
        sectorChart.setOption(modusOption);

        var institutionChart = ec.init(document.getElementById('institution-chart'));
        institutionChart.setOption(modusOption);
       
    }
);