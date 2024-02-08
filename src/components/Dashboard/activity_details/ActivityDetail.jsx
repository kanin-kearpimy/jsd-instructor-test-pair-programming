import { React, useState, useEffect } from "react";
import { Datepicker, Modal, Textarea, Alert } from "flowbite-react";
import ActivityImg from "../../CropImage/ActivityImg";
import { HiInformationCircle } from "react-icons/hi";
const ActivityDetail = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setshowAlert] = useState("hidden");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  const handleBlur = () => {
    // หลุดจากการโฟกัส
    console.log("บันทึกข้อมูลสำเร็จ");
  };

  const handleDatePickerChange = (date) => {
    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();
    // if currentYear < year; จะ setOpenModal(false); แต่ถ้าไม่ค่อย set ค่าต่างๆ
    if (currentYear > year) {
      setshowAlert("");
      setOpenModal(false);
    } else {
      // Set other values if the condition is not met
      setshowAlert("hidden");
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months start from 0, so add 1

      const formattedDate = `${month}-${day}-${year}`;

      setCurrentDate(formattedDate);
    }

    //console.log(`วัน: ${day}, เดือน: ${month}, ปี: ${year}`);
    setOpenModal(false);
  };

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${month}-${day}-${year}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <div className="flex mb-6">
        <div className="flex justify-center items-center bg-black w-[65px] h-[65px] rounded-lg  mr-2">
          <img src="/assets/images/icon/activity-type-icon/biking-icon.svg" />
        </div>
        <div className=" flex flex-col  grow">
          <div className="">
            <span className="">Activity Type</span>
          </div>

          <div className="relative bg-[#ECF229] text-left h-full flex items-center rounded-lg shadow-lg">
            <input
              type="text"
              className="w-full bg-transparent border-none"
              placeholder="Activity Name"
            />
            <div className="icon absolute top-2 right-3 ">
              <img src="/assets/images/icon/Subtract.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <ActivityImg />
      <Alert
        className={`py-2 my-2 ${showAlert}`}
        color="failure"
        icon={HiInformationCircle}
      >
        <span className="">
          Pick a year equal to or greater than the current !
        </span>
      </Alert>
      <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body className="text-center">
          <Datepicker
            inline
            showClearButton={null}
            showTodayButton={null}
            onSelectedDateChanged={handleDatePickerChange}
          />
        </Modal.Body>
      </Modal>
      <div className="bg-white flex border-2 h-[60px] border-black items-center rounded-lg mt-4 p-2 mb-4">
        <span className="">Date :</span>

        <button
          className="grow  justify-center  h-full text-left ml-2"
          onClick={() => setOpenModal(true)}
        >
          {currentDate}
        </button>

        <button onClick={() => setOpenModal(true)} className="icon h-full p-2">
          <img src="/assets/images/icon/Subtract.svg" alt="" />
        </button>
        {/* <input className="bg-transparent  border-none" type="date" /> */}
      </div>

      <div className="bg-white flex border-2 h-[60px] border-black items-center rounded-lg mt-4 p-2 mb-4">
        <span>Start :</span>

        <input
          className="bg-transparent grow h-full border-none"
          icon={null}
          type="time"
        />
      </div>

      <div className="bg-white flex border-2 h-[60px] border-black items-center rounded-lg mt-4 p-2 mb-4">
        <span>End :</span>

        <input className="bg-transparent grow border-none" type="time" />
      </div>

      <div className="bg-white flex border-2 border-black  rounded-lg mt-4 p-2 mb-4">
        <span className="mt-[7px] mr-[1px]">Note :</span>
        <div className=" max-w-md grow input relative">
          <label htmlFor="comment">
            <Textarea
              className="bg-transparent  border-none"
              id="comment"
              required
              rows={3}
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={inputValue}
            />
            <div className="icon absolute top-1 right-2 ">
              <img src="/assets/images/icon/Subtract.svg" alt="" />
            </div>
          </label>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <button className="relative w-[144px] h-[64px] bg-[#ECF229] border-2 items-center justify-center  border-black text-black rounded-lg flex shadow-lg ">
          <img
            src="/assets/images/icon/back-icon.svg"
            className="absolute top-[15px] left-3"
          />
          <div className=" w-full">
            <span className="  text-xl">Back</span>
          </div>
        </button>
        <button className="w-[144px] h-[64px] bg-[#dc3535] border-2 border-white text-white shadow-lg  rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ActivityDetail;
