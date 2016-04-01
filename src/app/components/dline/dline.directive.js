export function DlineDirective($window) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        data: '=',
        width: '=',
        heigt: '='
    },
    template: '<svg width="1200" height="200"></svg>',
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, el) {
    var data = scope.data,
    padding = 20,
    pathClass = "path";
    var xScale, yScale, xAxisGen, yAxisGen, lineFun;

    var d3 = $window.d3;
    var rawSvg = el.find('svg');
    var svg = d3.select(rawSvg[0]);

    var setChartParameters = function (){
      xScale = d3.scale.linear()
        .domain([data[0].hour, data[data.length - 1].hour])
        .range([padding + 5, rawSvg.attr("width") - padding]);

      yScale = d3.scale.linear()
        .domain([0, d3.max(data, function(d) {
          return d.sales;
        })])
        .range([rawSvg.attr("height") - padding, 0]);

      xAxisGen = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(data.length - 1);

      yAxisGen = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(5);

      lineFun = d3.svg.line()
        .x(function(d) {
          return xScale(d.hour);
        })
        .y(function(d) {
          return yScale(d.sales);
        })
        .interpolate("basis");
    }

    var drawLineChart = function() {
      setChartParameters();

      svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0,180)")
        .call(xAxisGen);

      svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(20,0)")
        .call(yAxisGen);

      svg.append("path")
        .attr({
          d: lineFun(data),
          "stroke": "blue",
          "stroke-width": 2,
          "fill": "none",
          "class": pathClass
        });
    }

    drawLineChart();
  }

}
