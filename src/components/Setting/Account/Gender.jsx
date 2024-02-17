import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

const Gender = ({ setGender, handleBlur }) => {
  const { data } = useContext(UserContext);

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  return (
    <>
      <select
        className="py-3 rounded-md border-[#d1d5db] mb-2"
        id="gender"
        name="Gender"
        defaultValue={data?.gender}
        onChange={handleGender}
        onBlur={handleBlur}
        aria-label="gender"
        required
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
    </>
  );
};

export default Gender;
