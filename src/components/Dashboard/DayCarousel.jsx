import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DayCarousel = ({ selectedDay, setSelectedDay, allDay, number }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 7,
    swipeToSlide: true,
    draggable: true,
    initialSlide: selectedDay - 4,
    arrows: null,
  };

  return (
    <Slider className="   border-solid" key={number++} {...settings}>
      {allDay.map((day) => {
        let btnColor = "";
        // Set btnColor based on the condition
        if (day === selectedDay) {
          btnColor = "bg-[#ECF229]";
        } else {
          btnColor = "bg-[#ddd]";
        }

        return (
          <div className=" ml-2 pb-5  pt-2" key={day}>
            <button
              className={`${btnColor}
           p-2 w-[40px] text-center rounded-md text-black`}
              style={{ marginTop: day !== selectedDay ? "8px" : "0" }}
              value={day}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          </div>
        );
      })}
    </Slider>
  );
};

export default DayCarousel;
