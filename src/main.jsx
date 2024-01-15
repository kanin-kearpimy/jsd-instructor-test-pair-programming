import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Style/index.css";
import { Wrapper } from "./Style/Wrapper";
import Homepage from "./components/Homepage.jsx";
import GlobalStyle from "./Style/GlobalStyles.jsx";
import Dashboard from "./components/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper>
      <RouterProvider router={router} />
      <GlobalStyle />
    </Wrapper>
  </React.StrictMode>
);
