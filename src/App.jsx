import Homepage from "./components/Home/Homepage";
import Signin from "./components/Home/Signin";
import Signup from "./components/Home/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Stat from "./components/Stat/Stat";
import Setting from "./components/Setting/Setting";
import Profile from "./components/Profile/Profile";
import ResetPassword from "./components/Home/ResetPassword";
import Account from "./components/Setting/Account/Account";
import ActivityDetail from "./components/Dashboard/activity_details/ActivityDetail";
import HelpSupport from "./components/Setting/HelpSupport";
import TermsConditions from "./components/Setting/TermsConditions";
import Feedback from "./components/Setting/Feedback";
import AboutUs from "./components/Setting/AboutUs";
import "react-image-crop/dist/ReactCrop.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/UserContext";
import ProtectRoute from "./components/ProtectRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    path: "home",
    element: (
      <ProtectRoute>
        <Dashboard />
      </ProtectRoute>
    ),
  },
  {
    path: "activityDetail/:activityId",
    element: (
      <ProtectRoute>
        <ActivityDetail />
      </ProtectRoute>
    ),
  },
  {
    path: "stat",
    element: (
      <ProtectRoute>
        <Stat />
      </ProtectRoute>
    ),
  },
  {
    path: "setting",
    element: (
      <ProtectRoute>
        <Setting />
      </ProtectRoute>
    ),
  },
  {
    path: "account",
    element: (
      <ProtectRoute>
        <Account />
      </ProtectRoute>
    ),
  },
  {
    path: "support",
    element: (
      <ProtectRoute>
        <HelpSupport />
      </ProtectRoute>
    ),
  },
  {
    path: "terms",
    element: (
      <ProtectRoute>
        <TermsConditions />
      </ProtectRoute>
    ),
  },
  {
    path: "feedback",
    element: (
      <ProtectRoute>
        <Feedback />
      </ProtectRoute>
    ),
  },
  {
    path: "aboutus",
    element: (
      <ProtectRoute>
        <AboutUs />
      </ProtectRoute>
    ),
  },
  {
    path: "profile",
    element: (
      <ProtectRoute>
        <Profile />
      </ProtectRoute>
    ),
  },
  {
    path: "aboutus",
    element: (
      <ProtectRoute>
        <AboutUs />
      </ProtectRoute>
    ),
  },
]);
function App() {
  return (
    <User>
      <RouterProvider router={router} />
    </User>
  );
}

export default App;
