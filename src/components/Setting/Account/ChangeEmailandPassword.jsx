import React, { useState } from "react";
import { Accordion } from "flowbite-react";
import ErrorMessage from "../../Home/ErrorMessage";

const mockdata = {
  email: "current@example.com",
  password: "abc1234",
};

const ChangeEmailandPassword = () => {
  const [currentEmail, setCurrentEmail] = useState(mockdata.email);
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");

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

  const [currentPassword, setCurrentPassword] = useState(mockdata.password);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleChangePassword() {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(newPassword)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long"
      );
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    console.log(`Changing password from ${currentPassword} to ${newPassword}`);
    setCurrentPassword(newPassword);
    setNewPassword("");
    setConfirmNewPassword("");
    setPasswordError("");
  }

  return (
    <div>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Change Email</Accordion.Title>
          <Accordion.Content>
            {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
            <p>Current Email</p>
            <input
              className="border border-black"
              type="email"
              value={currentEmail}
              onChange={(e) => setCurrentEmail(e.target.value)}
              readOnly
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
            <button onClick={handleChangeEmail}>Save</button>
          </Accordion.Content>
        </Accordion.Panel>
        {/* change password */}
        <Accordion.Panel>
          <Accordion.Title>Change Password</Accordion.Title>
          <Accordion.Content>
            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
            <p>Current Password</p>
            <input
              type="password"
              className="border border-black"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              readOnly
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
            <button onClick={handleChangePassword}>Save</button>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default ChangeEmailandPassword;
