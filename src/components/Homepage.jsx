import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="">
      {/* <img src='LogoApp/Logo-nobg.png' alt="Logo"/> */}
      <h1>LunarFit</h1>
      <h2>Let's work out to the moon</h2>
      <Link to="signin">Sign in</Link>
      <Link to="signup">Sign up</Link>
    </div>
  );
};

export default Homepage;
