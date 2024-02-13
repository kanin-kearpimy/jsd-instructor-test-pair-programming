import React, { useContext, useState } from "react";
import { FloatingLabel } from "flowbite-react";
import { UserContext } from "../../UserContext";

const Age = ({ setAge, handleBlur }) => {
  const { data } = useContext(UserContext);

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <FloatingLabel
      className="text-[1.25rem]"
      variant="outlined"
      label="Age"
      type="number"
      defaultValue={data?.age}
      onChange={handleAge}
      onBlur={handleBlur}
      aria-label="age"
    />
  );
};

export default Age;
