
import { Datepicker, Accordion, FloatingLabel } from "flowbite-react";
import React, { useState } from "react";

const mockdata = {
  email : 'current@example.com',
  password : 'abc1234'
}

const Account = ( ) => {
  const [currentEmail, setCurrentEmail] = useState(mockdata.email);
  const [newEmail, setNewEmail] = useState("");
  const [confirmNewEmail, setConfirmNewEmail] = useState("");

  function handleChangeEmail() {
    if (currentEmail && newEmail && confirmNewEmail && newEmail === confirmNewEmail) {
      console.log(`Changing email from ${currentEmail} to ${newEmail}`);
      setCurrentEmail(newEmail);
      setNewEmail('');
      setConfirmNewEmail('');
    } else if (!newEmail || !confirmNewEmail) {
    console.error('Please provide both new and confirm email addresses');
  } else {
    console.error('New email and confirm email do not match');
  }
}

  const [currentPassword, setCurrentPassword] = useState(mockdata.password)
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  function handleChangePassword() {
    if (currentPassword && newPassword && confirmNewPassword && newPassword === confirmNewPassword) {
      console.log(`Changing password from ${currentPassword} to ${newPassword}`);
      setCurrentPassword(newPassword);
      setNewPassword('');
      setConfirmNewPassword('');
    } else if (!newPassword || !confirmNewPassword) {
    console.error('Please provide both new and confirm password');
  } else {
    console.error('New password and confirm password do not match');
  }
  }

  return (
    <div>
      <div className="flex flex-col gap-4 input-wrapper bg-white p-4 ">
        <h2>Personal Information</h2>
        <div className="input relative">
          <FloatingLabel
            className="text-[1.25rem]"
            variant="outlined"
            label="Weight"
          />
          <div className="icon absolute top-2 right-4">
            {/* <img
              src="/src/assets/images/icon/weight-icon.svg"
              alt="weight-icon"
            /> */}
          </div>
        </div>
        <div className="input relative">
          <FloatingLabel
            className="text-[1.25rem]"
            variant="outlined"
            label="Height"
          />
          <div className="icon absolute top-2 right-4">
            {/* <img
              src="/src/assets/images/icon/Height-icon.png"
              alt="height-icon"
            /> */}
          </div>
        </div>
        {/* select gender */}
        <>
          <select id="gender" name="Gender" required>
            <>
              <img src="/src/assets/images/icon/Height-icon.png" alt="" />
            </>

            <option value="male"> 
            <img></img>Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </>
        {/* birth date */}
        <div>
          <Datepicker
            autoHide={true}
            icon={false}
            showClearButton={false}
            showTodayButton={false}
          />
        </div>
        {/* change email */}
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
                onChange={(e) => setNewEmail(e.target.value)} />
              <p>Confirm New Email</p>
              <input 
                className="border border-black" 
                value={confirmNewEmail}
                onChange={(e) => setConfirmNewEmail(e.target.value)}
                />
              <button
                onClick={handleChangeEmail}>
                  Save</button>
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
                readOnly />
              <p>New Password</p>
              <input 
                type="password" 
                className="border border-black" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}/>
              <p>Confirm New Password</p>
              <input 
                type="password" 
                className="border border-black" 
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}/>
              <button
                onClick={handleChangePassword}>
                  Save</button>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
          {/* delete account */}
        <button
          id="delete-account"
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;
