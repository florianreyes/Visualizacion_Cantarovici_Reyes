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
            thresholds: 10,
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
            // if the sum of mision_hs is greater than 70000, then fill with red, else grey
            fill: (d) => (d.anio_mision == 2016 ? "red" : "grey"),
            r: 6,
            fillOpacity: 0.5,
            thresholds: 10,
          }
        )
      ),
    ],
    width: 1000,
    height: 500,
    style: {
      "font-size": "14px",
      "font-family": "Supreme",
      color: "white",
      "background-color": "black",
    },

    color: {},
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 75,
    y: {
      label: "Suma de horas de mision",
      grid: true,
      line: true,
      nice: true,
      tickFormat: d3.format("~s")
    },
    x: { label: "Años", grid: true, line: true, nice: true, tickFormat: d3.format("~f") },
  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
