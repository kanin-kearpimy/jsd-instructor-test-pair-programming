import React from 'react'
import { FloatingLabel, Button } from "flowbite-react";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <div>
    <div className="flex text-center mb-[40px]">
      <Link to="/" className="flex-none">
        <FaAngleLeft />
      </Link>
      <h1 className="grow">Reset Password</h1>
    </div>

    <div className="flex flex-col ">
      <FloatingLabel
        className="bg-white  border-black"
        variant="outlined"
        label="Email"
      />
     
     
      <div className="flex flex-col mt-[32px]">
        <Link className=" flex" to="/home">
          <Button
            color="gray"
            className="grow bg-[#ddd] border-black text-black"
          >
            Send Email
          </Button>
        </Link>
       
      </div>
    </div>
  </div>
  )
}

export default ResetPassword