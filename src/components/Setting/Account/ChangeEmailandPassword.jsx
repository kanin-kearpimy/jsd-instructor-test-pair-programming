import React, { useState } from "react";
import { Accordion } from "flowbite-react";

const mockdata = {
  email: "current@example.com",
  password: "abc1234",
}

const ChangeEmailandPassword = () => {
  const [currentEmail, setCurrentEmail] = useState(mockdata.email);
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");

  function handleChangeEmail() {
    if (
      currentEmail &&
      newEmail &&
      confirmNewEmail &&
      newEmail === confirmNewEmail
    ) {
      console.log(`Changing email from ${currentEmail} to ${newEmail}`);
      setCurrentEmail(newEmail);
      setNewEmail("");
      setConfirmNewEmail("");
    } else if (!newEmail || !confirmNewEmail) {
      console.error("Please provide both new and confirm email addresses");
    } else {
      console.error("New email and confirm email do not match");
    }
  }

  const [currentPassword, setCurrentPassword] = useState(mockdata.password);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  function handleChangePassword() {
    if (
      currentPassword &&
      newPassword &&
      confirmNewPassword &&
      newPassword === confirmNewPassword
    ) {
      console.log(
        `Changing password from ${currentPassword} to ${newPassword}`
      );
      setCurrentPassword(newPassword);
      setNewPassword("");
      setConfirmNewPassword("");
    } else if (!newPassword || !confirmNewPassword) {
      console.error("Please provide both new and confirm password");
    } else {
      console.error("New password and confirm password do not match");
    }
  }

  return (
    <div>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>Change Email</Accordion.Title>
          <Accordion.Content>
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
            <button 
            onClick={handleChangePassword}>Save</button>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default ChangeEmailandPassword;
