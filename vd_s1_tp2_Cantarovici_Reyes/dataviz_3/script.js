d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data);

  const dataGroupedCountry = Array.from(
    d3.group(data, (d) => d.nacionalidad),
    ([key, value]) => {
      return {
        nacionalidad: key,
        mision_hs: d3.sum(value, (d) => d.mision_hs),
        eva_mision: d3.sum(value, (d) => d.eva_mision_hs),
      };
    }
  );

  console.log(dataGroupedCountry);

  let chart = Plot.plot({
    marks: [
      Plot.dot(dataGroupedCountry, {
        x: "nacionalidad",
        y: "mision_hs",
        r: "eva_mision",
      }),
    ],
    x: {
      grid: true,
      line: true,
      zero: true,
      nice: true,
    },
    y: { grid: true, line: true, zero: true, nice: true },
    //Preguntar si es mentir con datos
    r: { range: [1, 40] },
    width: 1000,
    height: 500,
    marginLeft: 100,
    marginBottom: 60,
  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
