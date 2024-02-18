import React, { useContext, useState } from "react";
import Schedule from "./Schedule";
import Activity from "./Activity";
import Tips from "./Tips";
import Nav from "../Nav";
import { SectionWrapper } from "../../Style/Wrapper";
import { UserContext } from "../UserContext";

const Dashboard = () => {
  const { data } = useContext(UserContext);
  const currentDate = new Date();
  const [monthFilter, setMonthFilter] = useState(
    `${currentDate.getMonth() + 1}`.padStart(2, "0")
  );
  const [dayFilter, setDayFilter] = useState(
    `${currentDate.getDate()}`.padStart(2, "0")
  );
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center xl:mb-8">
        <div
          className="greeting flex max-[1240px]:grow 
        justify-between items-center mb-8 xl:mb-0 xl:gap-8"
        >
          <div>
            <p className="text-gray-500 text-2xl">Welcome to LunarFit</p>
            <p className="font-bold text-3xl">{data?.firstName}</p>{" "}
            {/* Add name value */}
          </div>
          <div className="w-[100px] aspect-auto rounded-full overflow-hidden border-2 border-black">
            {data?.profileimg ? (
              <img src={data?.profileimg} alt="profile-image" />
            ) : (
              <img src="/assets/images/icon/account.png" alt="profile-image" />
            )}
          </div>
        </div>
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
      <div className="content-section flex flex-col gap-4">
        <Schedule setDayFilter={setDayFilter} setMonthFilter={setMonthFilter} />
        <Activity monthFilter={monthFilter} dayFilter={dayFilter} />
        <Tips />
      </div>
      <div className="xl:hidden sticky bottom-0">
        <Nav />
      </div>
    </SectionWrapper>
  );
};

export default Dashboard;
