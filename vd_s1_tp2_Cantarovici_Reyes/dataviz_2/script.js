d3.csv("astronautas.csv").then(function (data) {
  // Group the astronauts by nationality and count the number of astronauts in each group
  const yearData = Array.from(
    d3.group(data, (d) => d.anio_mision),
    ([key, value]) => {
      return {
        anio_mision: key,
        edad_mision: d3.mean(value, (d) => d.edad_mision),
      };
    }
  );

  console.log(yearData);

  let chart = Plot.plot({
    marks: [
      Plot.dot(yearData, {
        x: "anio_mision",
        y: "edad_mision",
        r: "edad_mision",
      }),
    ],
    x: { grid: true, line: true, zero: true, nice: true },
    y: { grid: true, line: true, zero: true, nice: true },
  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
