d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data);
  let chart = Plot.plot({
    // marks: [
    //   Plot.dot(data, {
    //     x: "anio_mision",
    //     y: "mision_hs",
    //     stroke: "mision_hs",
    //     r: "mision_hs",
    //   }),
    // ],
  
      marks: [
        Plot.line(
          data,
          Plot.binX(
            { y: "sum" },
            {
              x: "anio_mision",
              y: "mision_hs",
            
              fillOpacity: 0.5,
              thresholds: 10
            }
          )
        ),
        Plot.dot(
          data,
          Plot.binX(
            { y: "sum" },
            {
              x: "anio_mision",
              y: "mision_hs",
              fill: "black",
              r:6,
              fillOpacity: 0.5,
              thresholds: 10
            }
          )
        )
  
      ],
    x: { grid: true, line: true, zero: false, nice: true },
    y: { grid: true, line: true, zero: false, nice: true },
  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
