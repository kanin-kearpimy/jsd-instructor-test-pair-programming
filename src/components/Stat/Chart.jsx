import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [series] = useState([
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 10, 20, 30],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      height: 350,
      background: "#ffffff",
    },
    plotOptions: {
      bar: {
        horizontal: false,

        endingShape: "roundedTop",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      labels: {
        rotate: -45, // กำหนดการเอียงข้อความบนแกน x ให้เป็น -45 องศา
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    fill: {
      colors: ["#ECF229"],
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => "$ " + val + " thousands",
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Chart;
