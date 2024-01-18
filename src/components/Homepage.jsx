import { DarkLink, LightLink } from "../Style/ButtonStyles";
const Homepage = () => {
  return (
    <div className="">
      <img className="" src="/src/assets/images/logo-bg-none.png" alt="Logo" />
      <div className="flex flex-col items-center mt-[3rem]">
        <h1 className="text-[48px] font-bold flex">LunarFit</h1>
        <h2 className="text-[24px] font-bold flex">
          Let's work out to the moon
        </h2>
      </div>
      <div className="flex flex-col mt-[90px] gap-4">
        <LightLink to="signin">Sign in</LightLink>
        <DarkLink to="signup">Sign up</DarkLink>
      </div>
    </div>
  );
};

export default Homepage;
