function createTable(data) {
    const header = Object.keys(data[0]);
    const headerRow = d3.select("#header");
    headerRow.selectAll("th")
        .data(header)
        .enter()
        .append("th")
        .text(d => d);

    const content = d3.select("#content");
    data.forEach(rowData => {
        const row = content.append("tr");
        header.forEach(column => {
            row.append("td").text(rowData[column]);
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    d3.csv("data.csv").then(function(data) {
        createTable(data);
    }).catch(function(error) {
        console.log("Error loading the CSV data:", error);
    });
});