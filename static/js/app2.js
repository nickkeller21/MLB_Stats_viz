function getPicture(player) {
  let url = `/pic_url/${player}`;
  let selector = d3.select("#player_pic")
  d3.json(url).then(data =>{
    console.log(data)
    selector
      .attr('src', data)
  })
};


function buildCharts(player) {
  let url = `/stats/${player}`

  // @TODO: Use `d3.json` to fetch the data for the plots
  d3.json(url).then(stats =>{
    let years = stats['year']
    let AVGstat = stats['AVG']
    let HRstat = stats['HR']
    let OPSstat = stats['OPS']
    let RBIstat = stats['RBI']
    let WARstat = stats['WAR']
    var WAR = [{
      x: years,
      y: WARstat,
      type: 'line',
      name: "WAR",
      line: {
      color: 'rgb(55, 128, 191)',
      width: 2
    },
    text: ['player\'s total contributions to their team in one statistic <br>' + 
    'all-inclusive and provides a useful reference point for comparing players'],
    }];
  
    var layout = {
    title:'Wins Above Replacement (WAR)',
    xaxis: {
      title: 'Year',
      dtick: 1
    },
    yaxis: {
      title: 'Wins'
    }
  };
  Plotly.newPlot('player_war', WAR, layout);
  //// GRAPH 1
  var graph1 = [{
    x: years,
    y: AVGstat,
    type: 'line',
    name: "AVG",
    line: {
    color: 'rgb(20, 12, 191)',
    width: 2
  },
  text: ['batting average is determined by dividing a player\'s hits by his<br>' +
  'total at-bats for a number between zero (shown as .000) and one (1.000)']
  }];
  

  var layout1 = {
  title:'Average Hits at Bat (AVG)',
  xaxis: {
    title: 'Year',
    dtick: 1
  },
  yaxis: {
    title: 'Batting Average (Hits/At-Bat)',
    range: [0.000, 0.400]
    
  }
};
Plotly.newPlot('table_1', graph1, layout1);

//// GRAPH 2
var graph2 = [{
    x: years,
    y: HRstat,
    type: 'line',
    name: "HR",
    line: {
    color: 'rgb(20, 12, 191)',
    width: 2
  },
  }];
  

  var layout2 = {
  title:'Home Runs (HR)',
  xaxis: {
    title: 'Year',
    dtick: 1
  },
  yaxis: {
    title: 'Runs'
  }
};
Plotly.newPlot('table_2', graph2, layout2);

//// GRAPH 3
var graph3 = [{
    x: years,
    y: OPSstat,
    type: 'line',
    name: "OPS",
    line: {
    color: 'rgb(20, 12, 191)',
    width: 2
  },
  }];
  

  var layout3 = {
  title:'On-Base Plus Slugging (OPS)',
  xaxis: {
    title: 'Year',
    dtick: 1
  },
  yaxis: {
    title: 'On-Base% + Slugging%'
  }
};
Plotly.newPlot('table_3', graph3, layout3);

//// GRAPH 4
var graph4 = [{
    x: years,
    y: RBIstat,
    type: 'line',
    name: "RBI",
    line: {
    color: 'rgb(20, 12, 191)',
    width: 2
  },
  }];
  

  var layout4 = {
  title:'Runs Batted In (RBI)',
  xaxis: {
    title: 'Year',
    dtick: 1
  },
  yaxis: {
    title: 'Runs'
  }
};
Plotly.newPlot('table_4', graph4, layout4);




      });
  };



function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#myInput");

  // Use the list of player names to populate the select options
  d3.json("/names").then((names) => {
    //console.log(names)
    names.forEach((name) => {
      selector
        .append("option")
        .text(name)
        .property("value", name);
     // console.log(name)
    });

    // Use the first player from the list to build the initial plots
    const firstName = names[0];
    getPicture(firstName);
    buildCharts(firstName);
  });
};

function optionChanged(player) {
  // Fetch new data
  getPicture(player);
  buildCharts(player);
};

// Initialize the dashboard
init();
