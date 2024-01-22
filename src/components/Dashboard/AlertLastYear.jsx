import React from "react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
const AlertLastYear = ({ showAlert }) => {
  return (
    <Alert
      className={`py-2 my-2 ${showAlert}`}
      color="failure"
      icon={HiInformationCircle}
    >
      <span className="">
        Pick a year equal to or greater than the current !
      </span>
    </Alert>
  );
};

export default AlertLastYear;
