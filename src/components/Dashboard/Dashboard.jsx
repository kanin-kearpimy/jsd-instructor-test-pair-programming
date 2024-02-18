import React, { useContext } from "react";
import Schedule from "./Schedule";
import Activity from "./Activity";
import Tips from "./Tips";
import Nav from "../Nav";
import { SectionWrapper } from "../../Style/Wrapper";
import { UserContext } from "../UserContext";
const Dashboard = () => {
  const { data } = useContext(UserContext);
  return (
    <SectionWrapper>
      <div className="flex justify-between items-center">
        <div className="greeting flex justify-between items-center mb-8 xl:gap-8">
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
        <div className="hidden lg:block">
          <Nav />
        </div>
      </div>
      <div className="content-section flex flex-col gap-4">
        <Schedule />
        <Activity />
        <Tips />
      </div>
      <div className="lg:hidden sticky bottom-0">
        <Nav />
      </div>
    </SectionWrapper>
  );
};

export default Dashboard;
