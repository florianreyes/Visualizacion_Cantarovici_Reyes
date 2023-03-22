d3.csv("astronautas.csv").then(function (data) {

  const counts = new Map();
  data.forEach((d) => {
    const key = `${d.nacionalidad}-${d.genero}`;
    counts.set(key, (counts.get(key) || 0) + 1);
  });

  const groupedData = Array.from(counts).map(([key, count]) => {
    const [nacionalidad, genero] = key.split("-");
    return { nacionalidad, genero, count };
  });

  let chart = Plot.plot({
    marks: [
      Plot.barY(
        groupedData,
        Plot.groupX(
          { y: "sum" },
          {
            x: "nacionalidad",
            y: "count",

            fill: "genero",
            fillOpacity: 0.5,
            thresholds: 10,
            title: (d) => `${d.nacionalidad} - ${d.genero}: ${d.count}`,
          }
        )
      ),
    ],
    width: 1000,
    height: 500,
    style:{
      "font-size": "18px",
    },
    color: {
      legend: true,
      scheme: "reds",
      // make the legend text bigger
      style: {
        "font-size": "18px",
      }
    },
    // show only the ticks that are EE.UU. or Russia
    x: {
      tickFormat: (d) => (d === "EE.UU." || d === "U.S.S.R/Rusia" ? d : null),
    }


  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
