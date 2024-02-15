import React, { useContext, useState } from "react";
import { FloatingLabel } from "flowbite-react";
import { UserContext } from "../../UserContext";
const Weight = ({ setWeight, handleBlur }) => {
  const { data } = useContext(UserContext);

  const handlechangeWeight = (e) => {
    setWeight(e.target.value);
  };

  return (
    <>
      <FloatingLabel
        className="text-[1.25rem]"
        variant="outlined"
        label="Weight"
        type="number"
        onBlur={handleBlur}
        defaultValue={data?.weight}
        onChange={handlechangeWeight}
        aria-label="weight"
      />
    </>
  );
};

export default Weight;
