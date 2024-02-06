import React, { useState } from "react";
import { FloatingLabel } from "flowbite-react";

const Weight = () => {
  const [weight, setWeight] = useState("");
  const handlechangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleonBlur = () => {
    console.log(weight);
  };
  return (
    <>
      <FloatingLabel
        className="text-[1.25rem]"
        variant="outlined"
        label="Weight"
        onBlur={handleonBlur}
        value={weight}
        onChange={handlechangeWeight}
      />
    </>
  );
};

export default Weight;
