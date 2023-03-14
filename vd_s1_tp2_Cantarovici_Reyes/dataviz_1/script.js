d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data);

  // 1. The `d3.group()` method is used to group the `data` array by "anio_mision". This creates a Map object where each key is a unique year value and each value is an array of data points that correspond to that year.
  // 2. The `Array.from()` method is used to convert the resulting Map object to an array of objects, where each object has an "anio_mision" property with the year value and a "mision_hs" property with the mean value of "mision_hs" for that year.
  // 3. The first argument to `Array.from()` is the Map object to convert. The second argument is a map function that transforms each key-value pair in the Map to a new object with the desired properties.
  // 4. The map function takes two arguments: the first is the key of the current key-value pair (i.e., the year value), and the second is the value of the current key-value pair (i.e., the array of data points for that year).
  // 5. The map function returns a new object with two properties: "anio_mision" is set to the year value, and "mision_hs" is set to the mean value of "mision_hs" for that year, calculated using the `d3.mean()` method.
  // 6. The resulting array of objects is stored in the `yearData` variable, which is then used to create a new dot mark with one data point per year in the plot.

  const yearData = Array.from(
    d3.group(data, (d) => d.anio_mision),
    ([key, value]) => {
      return {
        anio_mision: key,
        mision_hs: d3.mean(value, (d) => d.mision_hs),
      };
    }
  );

  console.log(yearData);

  let chart = Plot.plot({
    marks: [
      Plot.dot(yearData, {
        x: "anio_mision",
        y: "mision_hs",
        stroke: "mision_hs",
        r: "mision_hs",
      }),
    ],
    x: { grid: true, line: true, zero: false, nice: true },
    y: { grid: true, line: true, zero: false, nice: true },
  });

  // Agregamos chart al div#chart de index.html
  d3.select("#chart").append(() => chart);
});
