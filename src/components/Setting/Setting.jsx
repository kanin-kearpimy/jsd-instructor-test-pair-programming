import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";

const Setting = () => {
  return (
    <main>
      <Link to="/account">Account</Link>
      <Nav />
    </main>
  );
};

export default Setting;
