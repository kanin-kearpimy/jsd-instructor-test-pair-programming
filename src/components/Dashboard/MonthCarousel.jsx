import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MonthCarousel = ({
  setCurrentMonthNumber,
  currentMonthNumber,
  number,
}) => {
  const monthNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const allMonth = Object.entries(monthNames).map(
    ([monthNumber, monthName]) => ({
      value: parseInt(monthNumber, 10),
      label: monthName,
    })
  );

  const settingsMonth = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    draggable: true,
    initialSlide: currentMonthNumber - 2,
    arrows: false,
  };

  return (
    <Slider className="bg-[#ECF229] pr-2" key={number++} {...settingsMonth}>
      {allMonth.map((monthObj) => {
        // Assuming btnColor is defined somewhere before this block
        let btnColor = "";
        // Set btnColor based on the condition
        if (monthObj.value === currentMonthNumber) {
          btnColor = "bg-black";
        } else {
          btnColor = "bg-[#ddd]";
        }

        return (
          <div key={monthObj.value} className="px-4 py-1">
            <button
              className={`${btnColor} p-1 w-[6rem] text-center rounded-lg shadow-sm text-${
                monthObj.value === currentMonthNumber ? "white" : "black"
              }`}
              onClick={() => setCurrentMonthNumber(monthObj.value)}
            >
              {monthObj.label}
            </button>
          </div>
        );
      })}
    </Slider>
  );
};

export default MonthCarousel;
