// config imports
import chartOptionsOne from "./config/donut_chart.js";
import chartOptionsTwo from "./config/area_chart.js";
import chartOptionsThree from "./config/bar_chart.js";

// get charts
const charts = document.querySelectorAll(".chart");

export default () => {
  charts.forEach((chart) => {
    let options;
    switch (chart.id) {
      case "chart-1":
        options = chartOptionsOne();
        break;
      case "chart-2":
        options = chartOptionsTwo();
        break;
      case "chart-3":
        options = chartOptionsThree();
        break;
    }
    new ApexCharts(chart, options).render();
  });
};
