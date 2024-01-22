import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa6";
import MonthCarousel from "./MonthCarousel";
import AlertLastYear from "./AlertLastYear";
import ModalDatePicker from "./ModalDatePicker";
import DayCarousel from "./DayCarousel";

import Calendar from "./Calendar";
let number = 0;

const Schedule = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showAlert, setshowAlert] = useState("hidden");
  const currentDate = new Date();
  const [currentMonthNumber, setCurrentMonthNumber] = useState(
    currentDate.getMonth() + 1
  );
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());
  const [allDay, setAllDay] = useState([]);

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

  const handleDatePickerChange = (date) => {
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();
    // if currentYear < year; จะ setOpenModal(false); แต่ถ้าไม่ค่อย set ค่าต่างๆ
    if (currentYear > year) {
      setOpenModal(false);
      setshowAlert("");
    } else {
      // Set other values if the condition is not met
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months start from 0, so add 1

      setCurrentYear(year);
      setSelectedDay(day);
      setshowAlert("hidden");
      setCurrentMonthNumber(month);
    }

    //console.log(`วัน: ${day}, เดือน: ${month}, ปี: ${year}`);
    setOpenModal(false);
  };

  useEffect(() => {
    const daysInMonth = new Date(currentYear, currentMonthNumber, 0).getDate();
    const daysArray = Array.from(
      { length: daysInMonth },
      (_, index) => index + 1
    );
    setAllDay(daysArray);

    //console.log("All Days:", daysArray);
    //console.log("Current Month Number:", currentMonthNumber);
    //console.log("Current Year:", currentYear);
    setshowAlert("hidden");
    console.log(selectedDay);
  }, [currentMonthNumber, currentYear, selectedDay]);

  //console.log(allDay);
  return (
    <>
      <AlertLastYear showAlert={showAlert} />
      <ModalDatePicker
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleDatePickerChange={handleDatePickerChange}
      />
      <div className="shadow-2xl">
        {/* <p>{currentMonthNumber}</p>
        <p>{allDay}</p> */}
        {/* <Calendar /> */}
        <div
          id="calendar-select"
          className="flex text-center shadow-inner bg-[#ECF229] border-solid border-black border-t-2 border-l-2 border-r-2  rounded-t-md"
        >
          <button
            className="grow flex row justify-center pt-2 pb-1"
            onClick={() => setOpenModal(true)}
          >
            <span className="text-bold">Schedule</span>
            <FaAngleRight className="my-auto" />
          </button>
        </div>

        <div className=" bg-white  border-solid border-black  border-l-2 border-r-2 border-b-2 rounded-b-md">
          <MonthCarousel
            selectedDay={selectedDay}
            setCurrentMonthNumber={setCurrentMonthNumber}
            currentMonthNumber={currentMonthNumber}
            number={number}
          />
          {/* <DayCarousel
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            allDay={allDay}
            number={number}
          /> */}
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
        </div>
      </div>
    </>
  );
};

export default Schedule;
