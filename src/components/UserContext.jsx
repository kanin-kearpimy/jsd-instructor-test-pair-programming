import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../utils/constant.js";
export const UserContext = createContext();
import Swal from "sweetalert2";
const User = ({ children }) => {
  const [data, setData] = useState({});
  const [reload, setReload] = useState(false);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    // axios.get("http://127.0.0.1:3000/").then((res) => {
    //   setData(res.usersData);
    // });
    const getData = async () => {
      const response = await axios.get(BACKEND_URL);
      if (response.status === 200 && response.data) {
        setData(response.data);
      }
    };
    getData();
  }, [reload]);

  const createActivity = async (
    userId,
    type,
    name,
    date,
    start,
    end,
    note,
    image
  ) => {
    const requestActivity = {
      userId,
      type,
      name,
      date,
      start,
      end,
      note,
      image,
    };

    const response = await axios.post(
      `${BACKEND_URL}/api/activity`,
      requestActivity
    );

    if (response.status === 200) {
      setReload(!reload);
    }
  };

  const createUser = async (firstName, lastName, email, password) => {
    const requestUser = {
      firstName,
      lastName,
      email,
      password,
    };
    const response = await axios.post(
      "http://127.0.0.1:3000/api/signup",
      requestUser
    );
    console.log("Response status:", response.status);

    if (response.status === 200) {
      setReload(!reload);
      window.location = "/home";
    } else {
      console.error("Failed to process the request");
    }
  };

  const userLogin = async (userData) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/signin",
        userData,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login Success",
        });

        window.location = "/home"; // Navigate to Home
      }
    } catch (error) {
      console.log(`errornaja: ${error}`);

      if (error.response && error.response.status === 401) {
        setInValid(true); // Set invalid flag to show error message
        Swal.fire({
          icon: "error",
          title: "Invalid password or email",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "An error occurred44444",
        });
      }
      throw error;
    }
  };

  const contextValue = {
    data,
    activityData,
    setActivityData,
    createActivity,
    createUser,
    userLogin,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default User;
