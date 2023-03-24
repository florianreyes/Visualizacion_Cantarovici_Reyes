d3.csv("astronautas.csv", d3.autoType).then((data) => {

  let chart = Plot.plot({
  marks: [
    Plot.dot(data, { x: "mision_hs", fill: "nacionalidad", fillOpacity: 0.6 }),
    Plot.ruleX(
      data,
      Plot.groupZ({ x: "mean" }, { x: "mision_hs", stroke: "nacionalidad" })
    )
  ],
  width: 800,
  height: 400,
  facet: {
    data,
    y: "nacionalidad",
    marginLeft: 100
  },
  fy: {
    axis: "left"
  },
  x:{grid: true,},
  width: 1000,
  height: 500,
  marginLeft: 100,
  marginBottom: 60,
  marginRight: 200,
})

d3.select("#chart").append(() => chart);
});
