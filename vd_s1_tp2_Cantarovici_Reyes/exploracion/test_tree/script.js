d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data);
  // Guardamos el svg generado en la variable chart
  let land = FileAttachment("land.json").json();

  let chart = Plot.plot({
    projection: "equal-earth",
    marks: [
      Plot.geo(land, { fill: "nacionalidad" }),
      Plot.graticule(),
      Plot.sphere(),
    ],
    width: 1000,
  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
