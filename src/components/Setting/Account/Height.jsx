import React, { useContext, useState } from "react";
import { FloatingLabel } from "flowbite-react";
import { UserContext } from "../../UserContext";

const Height = ({ setHeight, handleBlur }) => {
  const { data } = useContext(UserContext);
  const handlechangeHeight = (e) => {
    setHeight(e.target.value);
  };

  return (
    <div>
      <div className="input relative">
        <FloatingLabel
          className="text-[1.25rem]"
          variant="outlined"
          label="Height"
          type="number"
          defaultValue={data?.height}
          onBlur={handleBlur}
          onChange={handlechangeHeight}
          aria-label="height"
        />
      </div>
    </div>
  );
};

export default Height;
