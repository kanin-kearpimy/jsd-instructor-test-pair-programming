import React from "react";
import { FloatingLabel, Button } from "flowbite-react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <div className="flex text-center mb-[40px]">
        <Link to="/" className="flex-none">
          <FaAngleLeft />
        </Link>
        <h1 className="grow">Signin</h1>
      </div>

      <div className="flex flex-col ">
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
        <Link className="text-end" to="/reset-password">Forget Password ?</Link>
        <div className="flex flex-col mt-[67px]">
          <Link className=" flex" to="/home">
            <Button
              color="gray"
              className="grow bg-[#ddd] border-black text-black"
            >
              Sign in
            </Button>
          </Link>
          <span className="mt-[8px] text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-semibold">
              Create Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
