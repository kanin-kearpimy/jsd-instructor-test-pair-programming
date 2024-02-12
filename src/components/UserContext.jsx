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

  const userLogin = async (userData, navigate) => {
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
        }).then(() => {
          setActivityData(response.data.activityData);
          navigate("/home");
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error.response?.data?.message ||
          "Invalid email or password. Please try again.",
      });
    }
  };

  const deleteActivity = async (activityId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:3000/api/activity/${activityId}`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
      }
      // Remove the deleted activity from the state to update UI
    } catch (error) {
      console.error("Failed to delete activity:", error);
    }
  };

  const contextValue = {
    data,
    activityData,
    setActivityData,
    deleteActivity,
    reload,
    createActivity,
    createUser,
    userLogin,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default User;
