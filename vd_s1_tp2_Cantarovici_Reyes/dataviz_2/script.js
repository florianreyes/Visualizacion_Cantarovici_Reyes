

d3.csv("astronautas.csv").then(function(data) {
  // Group the astronauts by nationality and count the number of astronauts in each group
 const yearData = Array.from(d3.group(data, d => d.anio_mision), ([key, value]) => {
    return {
      anio_mision: key,
      edad_mision: d3.mean(value, d => d.edad_mision)
    };
  });

  console.log(yearData)

  let chart = Plot.plot({
   marks: [
     Plot.dot(yearData, { x: "anio_mision", y: "edad_mision" })
   ],
   x: { grid: true, line: true, zero: true, nice: true },
   y: { grid: true, line: true, zero: true, nice: true }
 });
 
 // Agregamos chart al div#chart de index.html
 d3.select('#chart').append(() => chart);
//   var groupedData = d3.rollup(data, v => v.length, d => d.nacionalidad);
//   console.log(groupedData);

  // Create an SVG element to hold the chart
//   var svg = d3.select("body")
//               .append("svg")
//               .attr("width", 600)
//               .attr("height", 400);

//   // Set the dimensions and margins of the chart
//   var margin = {top: 20, right: 20, bottom: 30, left: 40};
//   var width = +svg.attr("width") - margin.left - margin.right;
//   var height = +svg.attr("height") - margin.top - margin.bottom;

//   // Create scales for the x and y axes
//   var x = d3.scaleBand().range([0, width]).padding(0.1);
//   var y = d3.scaleLinear().range([height, 0]);

//   // Set the domain of the x and y scales
//   x.domain(groupedData.keys());
//   y.domain([0, d3.max(groupedData.values())]);

//   // Create the x and y axes
//   svg.append("g")
//      .attr("transform", "translate(" + margin.left + "," + (height + margin.top) + ")")
//      .call(d3.axisBottom(x));

//   svg.append("g")
//      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
//      .call(d3.axisLeft(y));

//   // Create the bars of the chart
//   svg.selectAll(".bar")
//      .data(groupedData)
//      .enter().append("rect")
//      .attr("class", "bar")
//      .attr("x", function(d) { return x(d[0]) + margin.left; })
//      .attr("y", function(d) { return y(d[1]) + margin.top; })
//      .attr("width", x.bandwidth())
//      .attr("height", function(d) { return height - y(d[1]); });

//   // Add labels to the chart
//   svg.selectAll(".label")
//      .data(groupedData)
//      .enter().append("text")
//      .attr("class", "label")
//      .attr("x", function(d) { return x(d[0]) + margin.left + x.bandwidth() / 2; })
//      .attr("y", function(d) { return y(d[1]) + margin.top - 5; })
//      .attr("text-anchor", "middle")
//      .text(function(d) { return d[1]; });
});


