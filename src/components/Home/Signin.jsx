import React, { useState } from "react";
import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";
import { Link, useNavigate } from "react-router-dom"; // Updated to include useNavigate
import { LightButton } from "../../Style/ButtonStyles";
import { Input, InputWrapper } from "../../Style/InputStyle";
import { BACKEND_URL } from "../../../utils/constant.js";
import axios from "axios"; // Import axios
import Swal from "sweetalert2"; // Import SweetAlert2

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inValid, setInValid] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle login
  const handleLogin = async () => {
    try {
      const response = await axios.post(BACKEND_URL, { email, password });
      console.log(response.status);

      if (response.status === 200) {
        localStorage.setItem("yourTokenKey", response.data.token); // Save the token or other relevant data
        Swal.fire({
          icon: "success",
          title: "Login Success",
        });

        navigate("/"); // Navigate to Home
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setInValid(true); // Set invalid flag to show error message
        Swal.fire({
          icon: "error",
          title: "Invalid password or email",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "An error occurred",
        });
      }
    }
  };

  return (
    <div>
      <PageTitle pageTitle="Sign In" />
      <InputWrapper>
        {inValid && (
          <ErrorMessage>
            <p>Invalid username or password</p>
          </ErrorMessage>
        )}
        <Input
          className="border-black"
          variant="outlined"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="bg-white border-black"
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className="ml-auto font-bold" to="/reset-password">
          Forget Password ?
        </Link>
        <div className="flex flex-col mt-[67px]">
          <LightButton
            color="gray"
            className="grow bg-[#ddd] border-black text-black"
            onClick={handleLogin}
          >
            Sign in
          </LightButton>
          <p className="mt-[8px] text-center">
            Don’t have an account?{" "}
            <span>
              <Link to="/signup" className="font-semibold">
                Create Account
              </Link>
            </span>
          </p>
        </div>
      </InputWrapper>
    </div>
  );
};

export default Signin;
