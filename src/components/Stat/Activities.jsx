import React, { useState, useEffect, useRef, useContext } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import axios from "axios";
import { BACKEND_URL } from "../../../utils/constant";
import { UserContext } from "../UserContext";
import { sortOrderType } from "../../../utils/sortOrderType";
//apecchart
const TypeActivity = ({ name, durationData, frequencyData, activityLogo }) => {
  //mockdata
  // const [unit, setUnit] =useState("X")
  const totalDurationInHoursFormatted = durationData.map((time) =>
    (time / 60).toFixed(1)
  );
  const totalDurationInHours = totalDurationInHoursFormatted.map((time) =>
    parseFloat(time)
  );
  const chartRef = useRef(null);
  const [currentSeries, setCurrentSeries] = useState({
    name: "Duration",
    data: totalDurationInHours, //durationData = activity.durationData = [0, 120, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
      data: totalDurationInHours,
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
  const sum = totalDurationInHours.reduce((a, b) => a + b, 0);
  const formattedSum = sum.toFixed(1);
  return (
    <div className="bike-header">
      <div className="flex mb-2 items-center relative">
        <Icon className="flex-none">
          <img
            className=""
            src={`/assets/images/icon/activity-type-icon/${activityLogo}-icon.svg`}
            alt="activity-logo"
          />
        </Icon>
        <div className="flex-1 ml-[1rem]">
          <h3 className="font-bold text-[32px]">{name}</h3>
          {currentSeries.name === "Duration" && (
            <p className="font-bold text-[16px]">
              Summary : {formattedSum} Hours
            </p>
          )}
          {currentSeries.name === "Frequency" && (
            <p className="font-bold text-[16px] ">
              Summary :{" "}
              {frequencyData.reduce((a, b) => {
                return a + b;
              })}{" "}
              Times
            </p>
          )}
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
  const [activities, setActivities] = useState([]);
  const { reload } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/displayActivity`, {
        withCredentials: true,
      });

      if (response.status === 200 && response.data) {
        console.log(response.data);
        setActivities(response.data);
      }
    };
    getData();
  }, [reload]);

  sortOrderType(activities);
  return (
    <div>
      {activities.map((activity, index) => (
        <TypeActivity
          key={index}
          name={activity.type}
          durationData={activity.durationData}
          frequencyData={activity.frequencyData}
          activityLogo={activity.type.toLowerCase()}
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
