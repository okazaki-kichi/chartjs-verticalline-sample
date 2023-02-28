var data = {
    labels: ["1月", "2月", "3月", "4月", "5月"],
    datasets: [{
        label: '販売台数',
        data: [880, 740, 900, 520, 930],
        borderColor: 'rgba(255, 100, 100, 1)',
        lineTension: 0,
        fill: false,
        borderWidth: 3
    }]
};
var options = {
    scales: {
        x:{
            display: true,
            title:{
                display: true,
                text: '月'
            }
        },
        y:{
            display: true,
            min: 0,
            title:{
                display: true,
                text: '個'
            },
            ticks: {
                callback: function(value, index, ticks) {
                    return value + '個';
                }
            }
        },
    },
    plugins: {
        title: {
            display: true,
            text: 'デバイス'
        },
        tooltip: {
            enabled: true,
            mode: 'nearest',
            intersect: false
        },
        verticalLinePlugin: true
    },
    verticalLinePlugin: {
        color : 'black',
        lineWidth : '1',
        setLineDash : [2,2]
    }
};
var ctx = document.getElementById("chart").getContext("2d");
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});