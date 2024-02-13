import React, { useState } from "react";
import { FloatingLabel } from "flowbite-react";

const Age = () => {
  const [age, setAge] = useState("");

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  
  const handleonBlurAge = () => {
    console.log(age);
  };
  return (
    <FloatingLabel
      className="text-[1.25rem]"
      variant="outlined"
      label="Age"
      type="number"
      value={age}
      onChange={handleAge}
      onBlur={handleonBlurAge}
    />
  );
};

export default Age;
