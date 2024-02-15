import React, { useState, useContext } from "react";
import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";
import { Link, useNavigate } from "react-router-dom"; // Updated to include useNavigate
import { LightButton } from "../../Style/ButtonStyles";
import { Input, InputWrapper } from "../../Style/InputStyle";
import { UserContext } from "../UserContext";
// Import SweetAlert2

const Signin = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inValid, setInValid] = useState(false);
  // Hook for navigation

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleLogin = () => {
    const userData = {
      email: email,
      password: password,
    };
    userLogin(userData, navigate);
  };

  // Function to handle login

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
          onChange={handleEmail}
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
