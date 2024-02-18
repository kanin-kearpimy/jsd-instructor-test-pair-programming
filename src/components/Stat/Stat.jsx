import React from "react";
import Nav from "../Nav";
import Activities from "./Activities.jsx";
import TitleComponent from "../TitleComponent";

const Stat = () => {
  return (
    <main>
      <div className="xl:flex gap-32">
        <TitleComponent title="Statistics" />
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
      <Activities />
      <div className="xl:hidden sticky bottom-0">
        <Nav />
      </div>
    </main>
  );
};

export default Stat;
