import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col h-[926px]">
      <img 
      className="pt-[64px] pl-[32px]"
      src='/src/assets/images/logo-bg-none.png' 
      alt="Logo"/>
      <h1 className="text-[48px] font-bold flex justify-center">LunarFit</h1>
      <h2 className="text-[24px] font-bold flex justify-center">Let's work out to the moon</h2>
      <div className="flex flex-col items-center mt-[90px] gap-4">
        <Link to="signin">Sign in</Link>
        <Link to="signup">Sign up</Link>
      </div >
    </div>
  );
};

export default Homepage;
