import { Datepicker, FloatingLabel } from "flowbite-react";
import React, { useState } from "react";
import Accordion from "./ChangeEmailandPassword.jsx";
import TitleComponent from "../../TitleComponent.jsx";
import { Weight } from "./Weight.jsx";
import { Gender } from "./Gender.jsx";
import { Age } from "./Age.jsx";

const Account = () => {
  return (
    <div>
      <TitleComponent title="Account" />
      <div className="flex flex-col gap-4 input-wrapper bg-white p-4 ">
        <h2>Personal Information</h2>
        <Weight />
        <div className="input relative">
          <FloatingLabel
            className="text-[1.25rem]"
            variant="outlined"
            label="Height"
          />
        </div>
        {/* select gender */}
        <Gender />
        {/* birth date */}
        {/* <div>
          <Datepicker
            autoHide={true}
            icon={false}
            showClearButton={false}
            showTodayButton={false}
          />
        </div> */}
        <Age />
        <Accordion />
        {/* delete account */}
        <button
          id="delete-account"
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;
