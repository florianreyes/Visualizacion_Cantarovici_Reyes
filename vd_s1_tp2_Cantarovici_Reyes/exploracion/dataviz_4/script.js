d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data);
  
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, 
        Plot.groupX(
          { y: "sum" },
          {
            x: "nacionalidad",
            y: "mision_hs",
            fill: "ocupacion",
            fillOpacity: 0.8,
            thresholds: 10,
            // make a title for each bar

            title: (d) => `${d.ocupacion}`,
            
          }
        )  
      ),
    ],
    style:{
      "font-size": "14px",
      "font-family" : "andale mono, courier new, monospace"
    },
    grid: true,
    line: true,
    zero: true,
    nice: true,
    width: 1000,
    height: 500,
    marginLeft: 100,
    marginBottom: 60,
    marginTop: 40,
    color: {
      legend: true,
      marginBottom: 30,
      marginBottom: 30,
      style:{
        "font-size": "14px",
        "font-family" : "andale mono, courier new, monospace"
      },
    },
    
  });
  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
