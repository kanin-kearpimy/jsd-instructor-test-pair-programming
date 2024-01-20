import { React, useState } from "react";

import { InputWrapper, Input } from "../../../Style/InputStyle";
import Profile from "../activity_details/Profile";
import { Textarea } from "flowbite-react";
const ActivityDetail = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [inValid, setInValid] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    // หลุดจากการโฟกัส
    setIsInputDisabled(true);
  };

  const handleClick = () => {
    // คลิกที่ div
    setIsInputDisabled(false);
  };

  return (
    <div>
      <div className="flex mb-8">
        <div className="flex justify-center items-center bg-black w-[65px] h-[65px] rounded-lg  mr-2">
          <img src="/src/assets/images/icon/activity-type-icon/biking-icon.svg" />
        </div>
        <div className=" flex flex-col  grow">
          <div className="">
            <span className="">Activity Type</span>
          </div>
          <div className="relative bg-[#ECF229] text-left h-full flex items-center rounded-lg shadow-lg">
            <h1 className="ml-2">Bike With Family</h1>
            <div onClick={handleClick} className="icon absolute top-2 right-3 ">
              <img src="/src/assets/images/icon/Subtract.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Profile />

      <div className="flex justify-center  mb-2 ">
        <img
          className="rounded-lg h-[162px] w-[366px]"
          src="/src/assets/images/tips/keep-it-brisk.webp"
          alt="Test"
        />
      </div>
      <div className="bg-white flex border-2 border-black items-center rounded-lg p-2 mb-2">
        <span>Date :</span>
        {/* <div onClick={handleClick} className="icon absolute top-2 right-3 ">
          <img src="/src/assets/images/icon/Subtract.svg" alt="" />
        </div> */}
        <input className="bg-transparent grow border-none" type="date" />
      </div>

      <InputWrapper>
        {inValid && (
          <ErrorMessage>
            <p>Invalid Email</p>
          </ErrorMessage>
        )}
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Date"
          type="date"
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Start"
          type="time"
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="finish"
          type="time"
        />
        <div className="max-w-md input relative">
          <label htmlFor="comment" onClick={handleClick}>
            Description
            <Textarea
              className="border-2 border-solid border-black"
              id="comment"
              placeholder="Note here...."
              required
              rows={4}
              disabled={isInputDisabled}
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={inputValue}
            />
            <div onClick={handleClick} className="icon absolute top-9 right-3 ">
              <img src="/src/assets/images/icon/Subtract.svg" alt="" />
            </div>
          </label>
        </div>
      </InputWrapper>
    </div>
  );
};

export default ActivityDetail;
