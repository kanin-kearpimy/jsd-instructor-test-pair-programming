import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const User = ({ children }) => {
  const [data, setData] = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    // axios.get("http://127.0.0.1:3000/").then((res) => {
    //   setData(res.usersData);
    // });
    const getData = async () => {
      const response = await axios.get("http://127.0.0.1:3000/");
      if (response.status === 200 && response.data) {
        setData(response.data);
      }
    };
    getData();
  }, []);

  const createData = async (type, name, date, start, end, note, image) => {
    const requestData = {
      type,
      name,
      date,
      start,
      end,
      note,
      image,
    };

    const response = await axios.post(
      "http://127.0.0.1:3000/api/activity",
      requestData
    );

    if (response.status === 200) {
      setReload(!reload);
    }
    //console.log(response);
  };
  const contextValue = {
    data,
    createData,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default User;
