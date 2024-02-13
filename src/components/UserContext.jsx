import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../utils/constant.js";
export const UserContext = createContext();
import Swal from "sweetalert2";

const User = ({ children }) => {
  const [data, setData] = useState({});
  const [reload, setReload] = useState(false);
  const [activityData, setActivityData] = useState([]);

  const formatDuration = (startTime, endTime) => {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const startDate = new Date();
    startDate.setHours(startHours, startMinutes, 0);

    const endDate = new Date();
    endDate.setHours(endHours, endMinutes, 0);

    const durationInMilliseconds = endDate - startDate;
    const durationInMinutes = durationInMilliseconds / 60000; // Convert milliseconds to minutes

    // Check if the duration is 60 minutes or more
    if (durationInMinutes >= 60) {
      const hours = Math.floor(durationInMinutes / 60);
      const minutes = durationInMinutes % 60;
      return `${hours} hr ${minutes > 0 ? `${minutes} min` : ""}`.trim(); // Formats the string with hours and minutes
    } else {
      return `${durationInMinutes} min`; // Just minutes if less than an hour
    }
  };

  const createActivity = async (type, name, date, start, end, note, image) => {
    const requestActivity = {
      type,
      name,
      date,
      start,
      end,
      note,
      image,
    };

    const response = await axios.post(
      `http://127.0.0.1:3000/api/activity`,
      requestActivity,
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your activity has been created",
        showConfirmButton: false,
        timer: 1500,
      });
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

  const updateActivity = async (activityId, updateData) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:3000/api/activityDetail/${activityId}`,
        updateData,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error(
        "Error apdating activity:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const contextValue = {
    setData,
    data,
    formatDuration,
    activityData,
    setActivityData,
    deleteActivity,
    updateActivity,
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
