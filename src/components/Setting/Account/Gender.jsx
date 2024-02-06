import React, { useState } from "react";

const Gender = () => {
  const [gender, setGender] = useState("");

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  console.log(gender);
  return (
    <>
      <select
        id="gender"
        name="Gender"
        value={gender}
        onChange={handleGender}
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
