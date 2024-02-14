import React, { useContext, useEffect, useState } from "react";
import { Accordion } from "flowbite-react";
import ErrorMessage from "../../Home/ErrorMessage";
import { UserContext } from "../../UserContext";
import validator from "validator";
import isEmail from "validator/lib/isEmail";
const mockdata = {
  email: "current@example.com",
  password: "abc1234",
};

const ChangeEmailandPassword = () => {
  const { updatePassword, updateEmail } = useContext(UserContext);
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChangeEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(newEmail)) {
      setEmailError("Invalid email format");
      return;
    }

    if (newEmail !== confirmNewEmail) {
      setEmailError("Emails do not match");
      return;
    }

    console.log(`Changing email from ${currentEmail} to ${newEmail}`);
    setCurrentEmail(newEmail);
    setNewEmail("");
    setConfirmNewEmail("");
    setEmailError("");
  }

  const handleSubmitEmail = () => {
    if (!validator.isEmail(newEmail) && !validator.isEmail(confirmNewEmail)) {
      setErrorMessage(
        "The new email and confirm new email address is not valid."
      );
    } else if (!validator.isEmail(confirmNewEmail)) {
      setErrorMessage("The confirm new email address is not valid.");
    } else if (!validator.isEmail(newEmail)) {
      setErrorMessage("The new email address is not valid.");
    } else if (newEmail !== confirmNewEmail) {
      setErrorMessage("New email and confirm new email do not match.");
      return;
    } else {
      setErrorMessage("");
      const userData = { currentEmail, newEmail, confirmNewEmail };
      updateEmail({ userData });
    }
  };

  const validatePasswords = ({
    currentPassword,
    newPassword,
    confirmNewPassword,
  }) => {
    let errorMessage = "";

    if (!currentPassword) errorMessage += "Current password is required. ";
    if (!newPassword) errorMessage += "New password is required. ";
    if (!confirmNewPassword)
      errorMessage += "Confirm new password is required. ";
    if (newPassword && newPassword.length < 8)
      errorMessage += "New password must be at least 8 characters long. ";
    if (newPassword && !/[A-Z]/.test(newPassword))
      errorMessage += "New password must contain an uppercase letter. ";
    if (newPassword && !/[a-z]/.test(newPassword))
      errorMessage += "New password must contain a lowercase letter. ";
    if (newPassword && !/[0-9]/.test(newPassword))
      errorMessage += "New password must contain a number. ";
    if (newPassword !== confirmNewPassword)
      errorMessage += "New password and confirm new password do not match. ";

    return errorMessage.trim();
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault(); // Prevent default form behavior if wrapped by <form>

    // Perform validation
    const validationError = validatePasswords({
      currentPassword,
      newPassword,
      confirmNewPassword,
    });

    if (validationError) {
      // If there's a validation error, update the state to display the error message
      setErrorMessage(validationError);
      return; // Stop further execution
    }
    const updateData = {
      currentPassword,
      newPassword,
      confirmNewPassword,
    };
    // console.log({ updateData });
    // If validation passes, proceed with form submission logic
    updatePassword({ updateData });
  };

  return (
    <div>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Change Email</Accordion.Title>
          <Accordion.Content>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <p>Current Email</p>
            <input
              className="border border-black"
              type="email"
              value={currentEmail}
              onChange={(e) => setCurrentEmail(e.target.value)}
            />
            <p>New Email</p>
            <input
              className="border border-black"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <p>Confirm New Email</p>
            <input
              className="border border-black"
              type="email"
              value={confirmNewEmail}
              onChange={(e) => setConfirmNewEmail(e.target.value)}
            />
            <button onClick={handleSubmitEmail}>Save</button>
          </Accordion.Content>
        </Accordion.Panel>
        {/* change password */}
        <Accordion.Panel>
          <Accordion.Title>Change Password</Accordion.Title>
          <Accordion.Content>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <p>Current Password</p>
            <input
              type="password"
              className="border border-black"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <p>New Password</p>
            <input
              type="password"
              className="border border-black"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <p>Confirm New Password</p>
            <input
              type="password"
              className="border border-black"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <button onClick={handleSubmitPassword}>Save</button>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default ChangeEmailandPassword;
