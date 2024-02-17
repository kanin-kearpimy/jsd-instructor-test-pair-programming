import React, { useContext, useState } from "react";
import { Accordion } from "flowbite-react";
import ErrorMessage from "../../Home/ErrorMessage";
import { UserContext } from "../../UserContext";
import validator from "validator";
import { LightButton } from "../../../Style/ButtonStyles";

const ChangeEmailandPassword = () => {
  const { updatePassword, updateEmail } = useContext(UserContext);
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    // If validation passes, proceed with form submission logic
    updatePassword({ updateData });
  };

  return (
    <div>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title className="">Change Email</Accordion.Title>
          <Accordion.Content className="">
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Current email:</label>
              <input
                className="border-[#d1d5db] rounded-md"
                type="email"
                value={currentEmail}
                onChange={(e) => setCurrentEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">New email:</label>
              <input
                className="border-[#d1d5db] rounded-md"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Confirm new email:</label>
              <input
                className="border-[#d1d5db] rounded-md"
                type="email"
                value={confirmNewEmail}
                onChange={(e) => setConfirmNewEmail(e.target.value)}
              />
            </div>
            <LightButton className="px-4 text-sm" onClick={handleSubmitEmail}>
              Save
            </LightButton>
          </Accordion.Content>
        </Accordion.Panel>
        {/* change password */}
        <Accordion.Panel>
          <Accordion.Title>Change Password</Accordion.Title>
          <Accordion.Content>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Current password:</label>
              <input
                type="password"
                className="border-[#d1d5db] rounded-md"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">New password:</label>
              <input
                type="password"
                className="border-[#d1d5db] rounded-md"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email">Confirm new password:</label>
              <input
                type="password"
                className="border-[#d1d5db] rounded-md"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
            <LightButton
              className="px-4 text-sm"
              onClick={handleSubmitPassword}
            >
              Save
            </LightButton>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default ChangeEmailandPassword;
