import Homepage from "./components/Homepage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Stat from "./components/Stat";
import Setting from "./components/Setting";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    path: "home",
    element: <Dashboard />,
  },
  {
    path: "stat",
    element: <Stat />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
