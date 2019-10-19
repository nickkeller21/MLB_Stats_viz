function getPicture(player) {
  let url = `/pic_url/${player}`;
  let selector = d3.select("#")
};


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

    // Use the first player from the list to build the initial plots
    const firstName = names[0];
    buildCharts(firstName);
  });
};

function optionChanged(player) {
  // Fetch new data
  buildCharts(player);
};

// Initialize the dashboard
init();
