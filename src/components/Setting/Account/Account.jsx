import React, { useContext, useEffect, useState } from "react";
import Accordion from "./ChangeEmailandPassword.jsx";
import TitleComponent from "../../TitleComponent.jsx";
import Weight from "./Weight.jsx";
import Gender from "./Gender.jsx";
import Age from "./Age.jsx";
import Height from "./Height.jsx";
import { UserContext } from "../../UserContext.jsx";
import Swal from "sweetalert2";
import axios from "axios";
import { BACKEND_URL } from "../../../../utils/constant.js";
const Account = () => {
  const { data, updateUser, setReload, reload } = useContext(UserContext);
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/dashboard`, {
        withCredentials: true,
      });

      if (response.status === 200 && response.data) {
        setWeight(response.data.weight);
        setHeight(response.data.height);
        setAge(response.data.age);
        setGender(response.data.gender);
      }
    };
    getData();
  }, []);

  const handleBlur = (eventOrLabel) => {
    let ariaLabel;
    if (typeof eventOrLabel === "string") {
      ariaLabel = eventOrLabel;
    } else if (eventOrLabel && eventOrLabel.target) {
      ariaLabel = eventOrLabel.target.getAttribute("aria-label");
    } else {
      ariaLabel = "item";
    }

    // Check if there's any change in the data
    if (
      weight !== data.weight ||
      height !== data.height ||
      gender !== data.gender ||
      age !== data.age
    ) {
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
    }
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
