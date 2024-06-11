export default () => {
  const theme = document.documentElement.classList.contains("dark");

  let colors = ["#B1E3FF", "#A8C5DA", "#0000008f"];
  if (theme) colors = ["#B1E3FF", "#A8C5DA", "#fff"];

  // Darken the color by reducing its lightness value
  const textColor = "#7A96A6"; // Adjusted color

  return {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 200,
      type: "area",
      toolbar: {
        show: false, // Hide the toolbar
      },
      zoom: {
        enabled: false, // Ensure zoom is disabled
      },
    },
    dataLabels: {
      enabled: false, // Hide data labels
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
      labels: {
        show: true, // Show x-axis labels
        style: {
          colors: textColor, // Set consistent text color
        },
      },
      axisBorder: {
        show: true, // Show x-axis border
        color: textColor, // Set consistent border color
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      labels: {
        show: true, // Show y-axis labels
        style: {
          colors: textColor, // Set consistent text color
        },
      },
      axisBorder: {
        show: true, // Show y-axis border
        color: textColor, // Set consistent border color
      },
      axisTicks: {
        show: true, // Show y-axis ticks
      },
    },
    grid: {
      show: false, // Hide grid lines
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 4,
        offsetX: 0,
        offsetY: 2,
      },
      labels: {
        colors: textColor, // Set consistent legend text color
      },
    },

    colors: colors,
  };
};
