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

  data = groupedData.filter((d) =>
    [
      "U.S.S.R/Rusia",
      "EE.UU.",
      "China",
      "Japon",
      "Italia",
      "Alemania",
      "Canada",
      "Reino Unido",
      "Francia",
    ].includes(d["nacionalidad"])
  );

  let chart = Plot.plot({
    marks: [
      Plot.barY(
        data,
        Plot.groupX(
          { y: "sum" },
          {
            x: "nacionalidad",
            y: "count",

            fill: "genero",
            fillOpacity: 0.8,
            thresholds: 10,
            title: (d) => `${d.nacionalidad} - ${d.genero}: ${d.count}`,
            sort: { x: "y", reverse: true },
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
    marginBottom: 50,
    marginTop: 40,

    color: {
      legend: true,
      scheme: "reds",
      style: {
        "font-size": "14px",
        "font-family": "Supreme",
        color: "white",
      },
    },
    y: {
      label: "Cantidad de astronautas",
      grid: true,
      line: true,
      nice: true,
      ticks: 7,
    },
    x: { label: "Nacionalidad", grid: true, line: true, nice: true },
  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
