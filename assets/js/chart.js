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
        text: '',
        subtext: 'Kasus Korupsi di Indonesia Berdasarkan Provinsi (Semester I 2014)',
        x:'left',
        y:'bottom'
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
        x : 'left',
        y : 'bottom',
        min: 0,
        max: 29,
        color: ['darkred','lightgray'],
        text:['Tinggi','Rendah'],
        calculable : true
    },
    toolbox: {
        show : false,
        orient : 'vertical',
        x: 'right',
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
            name: 'Jumlah Korupsi',
            type: 'map',
            roam: true,
            mapType: 'USA',
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:[
                {name : 'Aceh', value : 7},
				{name : 'Kalimantan Timur', value : 4},
				{name : 'Kalimantan Selatan', value : 3},
				{name : 'Sulawesi Barat', value : 3},
				{name : 'Sulawesi Tengah', value : 3},
				{name : 'Nusa Tenggara Barat', value : 4},
				{name : 'Sulawesi Tenggara', value : 4},
				{name : 'Sulawesi Utara', value : 4},
				{name : 'Bangka-Belitung', value : 5},
				{name : 'Lampung', value : 5},
				{name : 'Irian Jaya Barat', value : 5},
				{name : 'Bali', value : 6},
				{name : 'Bengkulu', value : 6},
				{name : 'Gorontalo', value : 6},
				{name : 'Kepulauan Riau', value : 6},
				{name : 'Maluku', value : 6},
				{name : 'Nusa Tenggara Timur', value : 6},
				{name : 'Sumatera Selatan', value : 6},
				{name : 'Yogyakarta', value : 7},
				{name : 'Jakarta Raya', value : 8},
				{name : 'Kalimantan Barat', value : 8},
				{name : 'Maluku Utara', value : 8},
				{name : 'Sumatera Utara', value : 9},
				{name : 'Banten', value : 10},
				{name : 'Sulawesi Selatan', value : 10},
				{name : 'Kalimantan Tengah', value : 12},
				{name : 'Papua', value : 12},
				{name : 'Sumatera Barat', value : 12},
				{name : 'Jambi', value : 14},
				{name : 'Riau', value : 16},
				{name : 'Jawa Timur', value : 21},
				{name : 'Jawa Barat', value : 25},
				{name : 'Jawa Tengah', value : 29},
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
            data : ['Anggaran Ganda','Pungutan Liar','Suap','Kegiatan Fiktif','Pemotongan Anggaran','Penyalahgunaan Wewenang','Mark up','Laporan Fiktif','Penggelapan','Penyalahgunaan Anggaran']
        }
    ],
    series : [
        {
            //name:'2011年',
            type:'bar',
            data:[1, 8, 11, 12, 15, 20,33,66,71,71]
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