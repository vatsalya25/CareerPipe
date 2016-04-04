export function D3lineDirective($window, $log) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      data: '=',
      width: '=',
      height: '='
    },
    template: '<div class="chart-container"></div>',
    // template: '<svg width="1200" height="800"></svg>',
    link: linkFunc
  };

  return directive;

  function linkFunc(scope, el) {
    var data = scope.data,
      padding = 20,
      pathClass = "path";
    var xScale, yScale, xAxisGen, yAxisGen, lineFun, svg;
    var margin = {
        top: 20,
        right: 30,
        bottom: 20,
        left: 30
      };
    $log.log(typeof(scope.width), typeof(scope.height), angular.version.full);
    var width = scope.width - margin.left - margin.right;
    var height = scope.height - margin.top - margin.bottom;

    var d3 = $window.d3;
    // var rawSvg = el.find('svg');
    // var svg = d3.select(rawSvg[0]);

    var rawContainer = el.find('.chart-container');
    var container = d3.select(rawContainer[0]);


    var setChartParameters = function() {
      svg = container.append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      xScale = d3.scale.linear()
        .domain([data[0].x, data[data.length - 1].x])
        .range([padding + 5, width - padding]);

      yScale = d3.scale.linear()
        .domain([0, d3.max(data, function(d) {
          return d.y;
        })])
        .range([height + padding, 0]);

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
          return xScale(d.x);
        })
        .y(function(d) {
          return yScale(d.y);
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
