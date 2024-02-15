import React from "react";
import Nav from "../Nav";
import Activities from "./Activities.jsx";
import TitleComponent from "../TitleComponent";




const Stat = () => {
  return (
    <main>
      <TitleComponent title="Statistics" />
      <Activities />
      <Nav />
    </main>
  );
};

export default Stat;
