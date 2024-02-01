import React, { useContext, useState } from "react";
import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";
import { Link } from "react-router-dom";
import { InputWrapper, Input } from "../../Style/InputStyle";
import { LightButton } from "../../Style/ButtonStyles";
import { UserContext } from "../UserContext";
const Signup = () => {
  const { createUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inValid, setInValid] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const checkConfirmPassword = () => {
    confirmPassword !== password ? setInValid(true) : setInValid(false);
    if (!inValid) {
      createUser(firstName, lastName, email, password);
    }
  };

  return (
    <div>
      <PageTitle pageTitle="Sign Up" />

      <InputWrapper>
        {inValid && (
          <ErrorMessage>
            <p>Invalid Email or Password</p>
          </ErrorMessage>
        )}
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Firstname"
          onChange={handleFirstName}
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Lastname"
          onChange={handleLastName}
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Email"
          onChange={handleEmail}
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Password"
          type="password"
          onChange={handlePassword}
        />
        <Input
          className="bg-white  border-black"
          variant="outlined"
          label="Confirm Password"
          type="password"
          onChange={handleConfirmPassword}
        />
        <div className="flex flex-col mt-[32px]">
          {/* <Link className=" flex" to="/signin"> */}
          <LightButton
            color="gray"
            className="grow bg-[#ddd] border-black text-black"
            onClick={checkConfirmPassword}
          >
            Sign Up
          </LightButton>
          {/* </Link> */}
          <p className="mt-[8px] text-center">
            Already have an account?{" "}
            <span>
              <Link to="/signin" className="font-semibold">
                Sign in
              </Link>
            </span>
          </p>
        </div>
      </InputWrapper>
    </div>
  );
};

export default Signup;
