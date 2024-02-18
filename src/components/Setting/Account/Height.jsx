import React, { useContext } from "react";
import { FloatingLabel } from "flowbite-react";
import { UserContext } from "../../UserContext";

const Height = ({ setHeight, handleBlur }) => {
  const { data } = useContext(UserContext);

  const handlechangeHeight = (e) => {
    let value = e.target.value;

    // Convert to a number to remove leading zeros, then back to a string
    value = String(Number(value));

    // Update the height state with the validated value
    setHeight(value);
  };

  return (
    <div className="xl:flex-1">
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
