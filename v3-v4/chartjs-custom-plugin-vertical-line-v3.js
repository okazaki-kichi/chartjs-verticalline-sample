Chart.register({
    id:'verticalLinePlugin',
    beforeEvent: function (chart, args) {
        const e = args.event;
        const elms = chart.getElementsAtEventForMode(e, 'nearest', { intersect: false }, true);
        if ((elms.length > 0) &&
            (e.x >= e.chart.chartArea.left) && (e.x <= e.chart.chartArea.right) &&
            (e.y >= e.chart.chartArea.top) && (e.y <= e.chart.chartArea.bottom)) {
                chart.options.verticalLinePlugin.x = elms[0].element.x
        } else {
            chart.options.verticalLinePlugin.x = NaN;
        }
    },
    afterDraw : function(chart) {
        var chartArea = chart.chartArea;
        var x = chart.options.verticalLinePlugin.x;
        if (!isNaN(x)) {
            ctx.save();
            //ラインの太さ
            ctx.lineWidth = chart.options.verticalLinePlugin.lineWidth;
            //ラインの色
            ctx.strokeStyle = chart.options.verticalLinePlugin.color;
            //点線の場合：[線の長さ, 間隔の長さ]、実線の場合：[]
            ctx.setLineDash(chart.options.verticalLinePlugin.setLineDash);
            ctx.beginPath();
            ctx.moveTo(chart.options.verticalLinePlugin.x, chartArea.bottom);
            ctx.lineTo(chart.options.verticalLinePlugin.x, chartArea.top);
            ctx.stroke();
            ctx.restore();
        }
    }
});