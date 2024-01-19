import React from "react";
import Schedule from "./Schedule";
import Activity from "./Activity";
import Tips from "./Tips";
import Nav from "../Nav";

const Dashboard = () => {
  return (
    <main>
      <div>
        <div>
          <p>Welcome back</p>
          <p>Chanawin</p> {/* Add name value */}
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <Schedule />
      <Activity />
      <Tips />
      <Nav />
    </main>
  );
};

export default Dashboard;
