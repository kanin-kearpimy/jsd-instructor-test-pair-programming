import React, { useState } from "react";
import { FloatingLabel } from "flowbite-react";

const Height = () => {
  const [height, setHeight] = useState();
  const handlechangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleonBlurHeight = () => {
    console.log(height);
  };

  return (
    <div>
      <div className="input relative">
        <FloatingLabel
          className="text-[1.25rem]"
          variant="outlined"
          label="Height"
          type="number"
          onBlur={handleonBlurHeight}
          value={height}
          onChange={handlechangeHeight}
        />
      </div>
    </div>
  );
};

export default Height;
