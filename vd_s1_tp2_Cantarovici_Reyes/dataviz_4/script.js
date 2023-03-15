d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data);
  // Guardamos el svg generado en la variable chart

  let chart = Plot.plot({
    marks: [
      Plot.barY(data, 
        {
        x: "nacionalidad",
        y: "mision_hs",
        fill: "ocupacion",  
        // sort: {x:"y",reverse:true},  
        sort:"ocupacion",
        title: (d) => `${d.ocupacion}: ${d.mision_hs} hs`,
      }
      
      ),
    ],
    grid: true,
    line: true,
    zero: true,
    nice: true,
    width: 1000,
    height: 500,
    marginLeft: 100,
    marginBottom: 60,
    color: {
      legend: true,
    },
    
  });
  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
