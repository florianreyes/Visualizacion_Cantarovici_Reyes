d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data);
  let chart = Plot.plot({
  
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
              fill: "white",
              r:6,
              fillOpacity: 0.5,
              thresholds: 10
            }
          )
        )
  
      ],
    x: { grid: true, line: true, zero: false, nice: true },
    y: { grid: true, line: true, zero: false, nice: true },
    width: 1000,
    height: 500,
    style:{
      "font-size": "14px",
      "font-family" : "andale mono, courier new, monospace",
      "color": "white",
      "background-color": "black",
      ".xgrid line, .ygrid line": {
        stroke: "white"
      }
    },
    
    color: {

    },
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 75,
    
  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
