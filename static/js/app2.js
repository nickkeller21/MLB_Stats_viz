

    // Use `.html("") to clear any existing metadata

  
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);


function buildCharts(player) {
  let url = `/stats/${player}`
  
  // @TODO: Use `d3.json` to fetch the data for the plots
  d3.json(url).then(data =>{
    console.log(data.WAR);
    




      });
  };



function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#myInput");

  // Use the list of player names to populate the select options
  d3.json("/names").then((names) => {
    console.log(names)
    names.forEach((name) => {
      selector
        .append("option")
        .text(name)
        .property("value", name);
      console.log(name)
    });

    // Use the first sample from the list to build the initial plots
    const firstName = names[0];
    buildCharts(firstName);
    buildMetadata(firstName);
  });
}

function optionChanged(player) {
  // Fetch new data each time a new sample is selected
  buildCharts(player);
  buildMetadata(player);
}

// Initialize the dashboard
init();
