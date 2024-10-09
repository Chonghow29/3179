var vg_1 = "json/annual_freshwater_withdrawals.vg.json";
let year1 = 1975;
let timer1;

// Function to update the year in the visualization
function updateYear(view, newYear) {
    view.signal('Year_selection', newYear).run();
}

// Embed the Vega-Lite visualization
vegaEmbed("#annual_freshwater_withdrawals", vg_1).then(function(result) {
    const view = result.view;

    // Start the automated animation
    timer1 = setInterval(() => {
    if (year1 < 2020) {
        year1 += 1;
    } else {
        year1 = 1975;
    }
    updateYear(view, year1);
    }, 500);  // Change the year every 500ms (adjust the speed if needed)

}).catch(console.error);