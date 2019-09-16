$(document).ready(function() {

    var mois = ["Mois","Janv","Févr","Mars","Avr","Mai","Juin","Juil","Aout","Sept","Oct","Nov","Déc"]
    var firstRequest = 'http://127.0.0.1:3000/getFirst/';
    var secondRequest = 'http://127.0.0.1:3000/getsecond/';
    fetch(firstRequest, { credentials: "omit" })
        .then(function(resp) {return resp.json();})
        .then(function(json) {
            var data = json;
            console.log(data);
            var month = [];
            var ca = [];
            var dm = [];

            if (Object.keys(data).length >0){
                var legend = Object.keys(data[0]);
                var index = legend.indexOf("dateCa");
            }
 
            if (index > -1) {
               legend.splice(index, 1);
            }
            legend = legend.map(x => x + "MTD");
            for (var i = 0; i < data.length; i++) {
                var val_month = data[i].dateCa.split("-")[1]
                month.push(mois[parseInt(val_month)]);
                if (Math.round(data[i].CA).toString().slice(0,-3)!=1){
                    ca.push(Math.round(data[i].CA).toString().slice(0,-3));
                }
                else {
                    ca.push(0);
                }
                dm.push(Math.round(data[i].DM).toString().slice(0,-3));
            }

            var c = document.getElementById('nb2');
            var myChart = echarts.init(c);
            console.log(ca);
            
            var itemStyle = {
                normal: {
                },
                emphasis: {
                    barBorderWidth: 1,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            };

            option = {
                backgroundColor: 'white',
                tooltip : {
                    show: true,
                    trigger: 'axis',
                    axisPointer : {           
                        type : 'shadow'        
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        saveAsImage: {show: true}
                    }
                },
                title:{
                    text: "CA et DM MTD",
                    x: 'left',
                    y: 'top'
                },
                legend: {
                    orient: 'horizontal', // 'vertical'
                    x: 'center', // 'center' | 'left' | {number},
                    y: 'top', // 'center' | 'bottom' | {number}
                    backgroundColor: '#eee',
                    borderColor: 'black',
                    borderWidth: 1,
                    padding: 10,    // [5, 10, 15, 20]
                    margin: 10,
                    itemGap: 20,
                    textStyle: {color: 'black'},
                    selected: {
                        'Precipitation' : false
                    }
                },
                grid: {
                    left: '1%',
                    right: '7%',
                    bottom: '3%',
                    containLabel: true
                },
                dataset: {
                    source: [month, ca, dm]
                },
                xAxis:  {
                    type: 'category',
                    data: month,
                    axisLabel : {
                        show:true,
                        interval: 0,    // {number}
                        margin: 8,
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '',
                        min: 0,
                        interval: 1000,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '',
                        show: false,
                        min: 0,
                        interval: 5000,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    // These series are in the first grid.
                    {
                        name:'CA DTM',
                        type:'bar',
                        itemStyle : {
                            normal: {
                                color : 'blue'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        seriesLayoutBy: 'row',
                        yAxisIndex: 0,
                        data:ca
                    },
                    {
                        name:'DM DTM',
                        type:'line',
                        symbol: 'triangle',
                        symbolSize: 8,
                        lineStyle : {
                            normal: {
                                color:'purple',
                                type: 'dashed'
                            }
                        },
                        itemStyle : {
                            normal: {
                                borderColor: 'purple',
                                color: 'purple'
                            }
                        },
                        yAxisIndex: 1,
                        data:dm
                    }
                ]
            };

            myChart.setOption(option);
        });
    fetch(secondRequest, { credentials: "omit" })
        .then(function(resp) {return resp.json();})
        .then(function(json) {
            var data = json;
            console.log(data);
            var month = [];
            var ca = [];
            var dm = [];
            var obj_dm = [];
            var obj_ca = [];

            if (Object.keys(data).length >0){
                var legend = Object.keys(data[0]);
                var index = legend.indexOf("dateCa");
            }
 
            if (index > -1) {
               legend.splice(index, 1);
            }
            legend = legend.map(x => x + "MTD");
            legend.push("obj CM YTD");
            legend.push("obj DM YTD");
            var cpt = 200;
            for (var i = 0; i < data.length; i++) {
                cpt = cpt+100;
                var val_month = data[i].dateCa.split("-")[1]
                month.push(mois[parseInt(val_month)]);
                obj_ca.push(cpt);
                obj_dm.push(30.2);
                if (Math.round(data[i].CA).toString().slice(0,-3)!=1){
                    ca.push(Math.round(data[i].CA).toString().slice(0,-3));
                }
                else {
                    ca.push(0);
                }
                dm.push(Math.round(data[i].DM).toString().slice(0,-3));
            }

            var c = document.getElementById('nb3');
            var myChart = echarts.init(c);
            
            var itemStyle = {
                normal: {
                },
                emphasis: {
                    barBorderWidth: 1,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            };

            option = {
                backgroundColor: 'white',
                tooltip : {
                    show: true,
                    trigger: 'axis',
                    axisPointer : {           
                        type : 'shadow'        
                    },
                    textStyle: {
                        fontSize: 10
                    }
                },
                toolbox: {
                    feature: {
                        dataView: {show: true, readOnly: false},
                        saveAsImage: {show: true}
                    }
                },
                title:{
                    text: "Prévisionnel vs réalisé YTD",
                    x: 'left',
                    y: 'top'
                },
                legend: {
                    orient: 'horizontal', // 'vertical'
                    x: 'center', // 'center' | 'left' | {number},
                    y: 'top', // 'center' | 'bottom' | {number}
                    backgroundColor: '#eee',
                    borderColor: 'black',
                    borderWidth: 1,
                    padding: 10,    // [5, 10, 15, 20]
                    margin: 10,
                    itemGap: 20,
                    textStyle: {color: 'black'},
                    selected: {
                        'Precipitation' : false
                    }
                },
                grid: {
                    left: '1%',
                    right: '7%',
                    bottom: '3%',
                    containLabel: true
                },
                dataset: {
                    source: [month, ca, dm]
                },
                xAxis:  {
                    type: 'category',
                    data: month,
                    axisLabel : {
                        show:true,
                        interval: 0,    // {number}
                        margin: 8,
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '',
                        min: 0,
                        interval: 1000,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    {
                        type: 'value',
                        name: '',
                        show: false,
                        min: 0,
                        interval: 5000,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                    // These series are in the first grid.
                    {
                        name:'CA DTM',
                        type:'bar',
                        itemStyle : {
                            normal: {
                                color : 'blue'
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        seriesLayoutBy: 'row',
                        yAxisIndex: 0,
                        data:ca
                    },
                    {
                        name:'DM DTM',
                        type:'line',
                        symbol: 'triangle',
                        symbolSize: 8,
                        lineStyle : {
                            normal: {
                                color:'purple'
                            }
                        },
                        itemStyle : {
                            normal: {
                                borderColor: 'purple',
                                color: 'purple'
                            }
                        },
                        yAxisIndex: 1,
                        data:dm
                    },
                    {
                        name:'obj CA YTD',
                        type:'line',
                        symbol: 'triangle',
                        symbolSize: 8,
                        lineStyle : {
                            normal: {
                                color:'purple',
                                type: 'dashed'
                            }
                        },
                        itemStyle : {
                            normal: {
                                borderColor: 'purple',
                                color: 'purple'
                            }
                        },
                        yAxisIndex: 1,
                        data:obj_ca
                    },
                    {
                        name:'obj DM YTD',
                        type:'line',
                        symbol: 'triangle',
                        symbolSize: 8,
                        lineStyle : {
                            normal: {
                                color:'blue',
                                type: 'dashed'
                            }
                        },
                        itemStyle : {
                            normal: {
                                borderColor: 'blue',
                                color: 'blue'
                            }
                        },
                        yAxisIndex: 1,
                        data:obj_dm
                    }
                ]
            };

            myChart.setOption(option);
        });
})