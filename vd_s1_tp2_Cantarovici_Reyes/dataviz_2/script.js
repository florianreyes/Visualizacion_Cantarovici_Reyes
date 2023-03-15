d3.csv("astronautas.csv").then(function (data) {
  // Group the astronauts by nationality and count the number of astronauts in each group
  // const yearData = Array.from(
  //   d3.group(data, (d) => d.anio_mision),
  //   ([key, value]) => {
  //     return {
  //       anio_mision: key,
  //       edad_mision: d3.mean(value, (d) => d.edad_mision),
  //     };
  //   }
  // );


  let chart = Plot.plot({
    marks: [
      Plot.barY(
        data,
        Plot.groupX(
          { y: "sum" },
          {
            x: "genero",
            y: "mision_hs",
            fill: "genero",
            fillOpacity: 0.5,
            thresholds: 10
          }
        )
      )
    ],
    marginLeft: 100,
    width: 508,
    height: 300,
    color:{
      legend: true,
      // another color scheme
      scheme: "reds"
    }
  })

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
