import React, { useContext, useState } from "react";
import Accordion from "./ChangeEmailandPassword.jsx";
import TitleComponent from "../../TitleComponent.jsx";
import Weight from "./Weight.jsx";
import Gender from "./Gender.jsx";
import Age from "./Age.jsx";
import Height from "./Height.jsx";
import { UserContext } from "../../UserContext.jsx";
import Swal from "sweetalert2";
const Account = () => {
  const { updateUser, setReload, reload } = useContext(UserContext);
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();

  const handleBlur = (eventOrLabel) => {
    let ariaLabel;
    if (typeof eventOrLabel === "string") {
      // Directly use the label if a string is provided
      ariaLabel = eventOrLabel;
    } else if (eventOrLabel && eventOrLabel.target) {
      // Extract aria-label from the event target if an event is provided
      ariaLabel = eventOrLabel.target.getAttribute("aria-label");
    } else {
      // Default label or error handling
      ariaLabel = "item";
    }

    const updateData = { weight, height, gender, age };
    updateUser(updateData);
    setReload(!reload);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Your ${ariaLabel} has been updated`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <TitleComponent title="Account" />
      <div className="flex flex-col gap-4 input-wrapper bg-white p-4 ">
        <h2>Personal Information</h2>
        <Weight setWeight={setWeight} handleBlur={handleBlur} />
        <Height setHeight={setHeight} handleBlur={handleBlur} />
        <Gender setGender={setGender} handleBlur={handleBlur} />
        <Age setAge={setAge} handleBlur={handleBlur} />
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
