import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../utils/constant.js";
export const UserContext = createContext();

const User = ({ children }) => {
  const [data, setData] = useState({});
  const [reload, setReload] = useState(false);
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

  const contextValue = {
    data,
    createActivity,
    createUser,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default User;
