// d3.csv('data2000.csv', d3.autoType).then(data => {
//   console.log(data)
//   // Guardamos el svg generado en la variable chart
//   const chart = Plot.plot({
//   width,
//   x: {axis: "top", tickFormat: "s"},
//   color: {scheme: "spectral", domain: ocupacion},
//   marks: [
//     Plot.barX(stateages, {
//       y: "mision_hs",
//       x: "nacionalidad",
//       fill: "ocupacion",
//       sort: {y: "y", reverse: true}
//     }),
//     Plot.ruleX([0])
//   ]
// })
//   // Agregamos chart al div#chart de index.html
//   d3.select('#chart').append(() => chart)
// })

// const rows = csv.split('\n');
// const headers = rows[0].split(',');
// const data = rows.slice(1).map(row => {
//   const values = row.split(',');
//   return headers.reduce((obj, key, i) => ({ ...obj, [key]: values[i] }), {});
// });

// const result = Object.values(data.reduce((acc, { nombre, nacionalidad, ocupacion }) => {
//   if (!acc[nacionalidad]) acc[nacionalidad] = {};
//   if (!acc[nacionalidad][ocupacion]) acc[nacionalidad][ocupacion] = new Set();
//   acc[nacionalidad][ocupacion].add(nombre);
//   return acc;
// }, {})).flatMap(nac => Object.entries(nac).map(([ocup, set]) => [Object.keys(nac)[0], ocup, set.size]));

// console.log(result);
