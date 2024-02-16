import React, { useState, useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

const activities = [
  {
    name: "Bike",
    durationData: [55, 57, 56, 61, 58, 63, 60, 66, 10, 20, 80, 10],
    frequencyData: [20, 25, 22, 30, 28, 35, 32, 40, 8, 15, 50],
    activityLogo:
      "../../../public/assets/images/icon/activity-type-icon/bike-icon.svg",
  },
  {
    name: "Hike",
    durationData: [45, 47, 46, 51, 48, 53, 50, 56, 20, 30, 70],
    frequencyData: [15, 20, 17, 25, 23, 30, 27, 35, 10, 18, 40],
    activityLogo:
      "../../../public/assets/images/icon/activity-type-icon/hike-icon.svg",
  },
  {
    name: "Swim",
    durationData: [35, 37, 36, 41, 38, 43, 40, 46, 30, 40, 60],
    frequencyData: [10, 15, 12, 20, 18, 25, 22, 30, 5, 12, 30],
    activityLogo:
      "../../../public/assets/images/icon/activity-type-icon/swim-icon.svg",
  },
  {
    name: "Run",
    durationData: [65, 67, 66, 71, 68, 73, 70, 76, 40, 50, 90],
    frequencyData: [25, 30, 27, 35, 33, 40, 37, 45, 20, 28, 60],
    activityLogo:
      "../../../public/assets/images/icon/activity-type-icon/run-icon.svg",
  },
  {
    name: "Walk",
    durationData: [75, 77, 76, 81, 78, 83, 80, 86, 50, 60, 100],
    frequencyData: [30, 35, 32, 40, 38, 45, 42, 50, 25, 35, 70],
    activityLogo:
      "../../../public/assets/images/icon/activity-type-icon/walk-icon.svg",
  },
];

console.log(activities[0].durationData.league);

//apecchart
const TypeActivity = ({ name, durationData, frequencyData, activityLogo }) => {
  //mockdata
  // const [unit, setUnit] =useState("X")

  const chartRef = useRef(null);
  const [currentSeries, setCurrentSeries] = useState({
    name: "Duration",
    data: durationData,
  });
  // Default series
  const [unit, setUnit] = useState("hours"); // Default unit
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 100,
      background: "#ffffff",
    },
    //sethorizontal and border of bar
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "roundedTop",
        borderRadius: 4,
      },
    },
    //set show data in label
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
    //show data when hovor
    tooltip: {
      y: {
        formatter: (val) => `${val} ${unit}`,
      },
    },
    //change color
    fill: {
      colors: ["#ECF229"],
      opacity: 1,
    },
  });

  // Function to switch to Duration
  const switchToDuration = () => {
    setCurrentSeries({
      name: "Duration",
      data: durationData,
    });
    handleUnitChange("hours");
  };

  // Function to switch to Frequency
  const switchToFrequency = () => {
    setCurrentSeries({
      name: "Frequency",
      data: frequencyData,
    });
    handleUnitChange("times");
  };

  const updateChartOptions = (newUnit) => {
    const newOptions = {
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val} ${newUnit}`; // Dynamically updating the unit
          },
        },
      },
    };

    // Directly calling updateOptions on the chart instance
    chartRef.current.chart.updateOptions(newOptions, false, true);
  };

  const handleUnitChange = (newUnit) => {
    // Assume you have a state for the unit or any logic to change it
    updateChartOptions(newUnit);
  };

  return (
    <div className="bike-header">
      <div className="flex mb-2 items-center relative">
        <Icon className="flex-none">
          <img
            className=""
            src={`/assets/images/icon/activity-type-icon/${activities.name.toLowerCase()}-icon.svg`}
            alt="activity-logo"
          />
        </Icon>
        <div className="flex-1 ml-[1rem]">
          <h3 className="font-bold text-[32px]">{name}</h3>
          <p className="font-bold text-[16px] ">
            Activity : {durationData.league}
          </p>
        </div>
        <div className="flex absolute top-0 right-0 self-start">
          <button
            className={`text-sm border-solid border-r-[1px] p-1 border-2 border-black rounded-l-md  ${
              currentSeries.name === "Duration" ? "bg-[#ECF229]" : "bg-white"
            }`}
            onClick={switchToDuration}
          >
            Duration
          </button>
          <button
            className={`text-sm border-solid border-l-[1px] p-1 border-2 border-black rounded-r-md ${
              currentSeries.name === "Frequency" ? "bg-[#ECF229]" : "bg-white"
            }`}
            onClick={switchToFrequency}
          >
            Frequency
          </button>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart
          key={`${unit}`}
          options={options}
          series={[currentSeries]}
          type="bar"
          height={350}
          ref={chartRef}
        />
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <div>
      {activities.map((activity, index) => (
        <TypeActivity
          key={index}
          name={activity.name}
          durationData={activity.durationData}
          frequencyData={activity.frequencyData}
          activityLogo={activity.activityLogo}
        />
      ))}
    </div>
  );
};

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  background-size: cover;
  border-radius: 10px;
  width: 85px;
  aspect-ratio: 1;

  & img {
    width: 50px;
    aspect-ratio: 1;
  }
`;

export default Activities;
