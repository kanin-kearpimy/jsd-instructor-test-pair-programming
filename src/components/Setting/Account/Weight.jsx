import React, { useState } from "react";
import { FloatingLabel } from "flowbite-react";

const Weight = () => {
  const [weight, setWeight] = useState("");
  const handlechangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleonBlurWeight = () => {
    console.log(weight);
  };
  return (
    <>
      <FloatingLabel
        className="text-[1.25rem]"
        variant="outlined"
        label="Weight"
        type="number"
        onBlur={handleonBlurWeight}
        value={weight}
        onChange={handlechangeWeight}
      />
    </>
  );
};

export default Weight;
