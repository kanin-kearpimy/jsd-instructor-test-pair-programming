import React from "react";
import { FloatingLabel, Button } from "flowbite-react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="flex text-center mb-[40px]">
        <Link to="/" className="flex-none">
          <FaAngleLeft />
        </Link>
        <h1 className="grow">Sign Up</h1>
      </div>

      <div className="flex flex-col gap-[23px] ">
        <FloatingLabel
          className="bg-white  border-black"
          variant="outlined"
          label="Firstname"
        />
        <FloatingLabel
          className="bg-white  border-black"
          variant="outlined"
          label="Lastname"
        />
         <FloatingLabel
          className="bg-white  border-black"
          variant="outlined"
          label="Email"
        />
         <FloatingLabel
          className="bg-white  border-black"
          variant="outlined"
          label="Password"
        />
         <FloatingLabel
          className="bg-white  border-black"
          variant="outlined"
          label="Confirm Password"
        />
       
        <div className="flex flex-col mt-[32px]">
          <Link className=" flex" to="/signin">
            <Button
              color="gray"
              className="grow bg-[#ddd] border-black text-black"
            >
              Sign Up
            </Button>
          </Link>
          <span className="mt-[8px] text-center">
          Already have an account? {" "}
            <Link to="/signin" className="font-semibold">
            Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
