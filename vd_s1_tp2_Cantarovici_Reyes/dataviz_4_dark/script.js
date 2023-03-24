d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data);
  
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, 
        Plot.groupX(
          { y: "sum" },
          {
            x: "nacionalidad",
            y: "mision_hs",
            fill: "ocupacion",
            fillOpacity: 0.8,
            title: (d) => `${d.ocupacion}`,
            
          }
        )  
      ),
    ],
    style:{
      "font-size": "14px",
      "font-family" : "andale mono, courier new, monospace"
    },
    grid: true,
    line: true,
    zero: true,
    nice: true,
    width: 1200,
    height: 500,
    marginLeft: 100,
    marginBottom: 60,
    marginTop: 40,
    x: {},
    style:{"background-color": "black",
    "color": "white", 
    "font-family" : "andale mono, courier new, monospace","font-size": "14px", "margin-top": "30px", "margin-right": "50px"},
    color: {
      legend: true,
      marginBottom: 30,
      marginBottom: 30,
      style:{
        "font-size": "14px",
        "font-family" : "andale mono, courier new, monospace",
        "color" : "white",
      },
    },
    
  });

  d3.select("#chart").append(() => chart);
});