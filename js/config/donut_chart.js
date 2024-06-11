export default () => {
  const theme = document.documentElement.classList.contains("dark");
  let colors = ["#B1E3FF", "#A8C5DA"];
  if (theme) colors = ["#B1E3FF", "#A8C5DA"];

  return {
    chart: {
      type: "donut",
      height: 170,
      width: 170,
      // dropShadow: {
      //   // Add dropShadow property
      //   enabled: true,
      //   enabledOnSeries: undefined,
      //   top: 1,
      //   left: 1,
      //   blur: 2,
      //   color: "#000",
      //   opacity: 0.5,
      // },
    },
    series: [40, 60],
    labels: ["Teacher", "Student"],
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
        expandOnClick: false,
      },
    },
    dataLabels: {
      enabled: true, // Enable dataLabels
      formatter: function (val) {
        return val + "%";
      },
      style: {
        fontSize: "13px",
        fontFamily: "inter, sans-serif",
        colors: ["#0000009f"],
        opacity: 0.45,
      },
      dropShadow: { enabled: false },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + " sales";
        },
      },
    },
    legend: { show: false },
    stroke: {
      show: false,
    },
    colors: colors,
  };
};
