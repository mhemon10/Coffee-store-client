import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayouts from "./layouts/MainLayouts.jsx";
import Home from "./pages/Home/HomePage.jsx";
import AddCoffee from "./components/addcoffee/AddCoffee.jsx";
import UpdateCoffee from "./components/updatecoffee/UpdateCoffee.jsx";
import CoffeeDetails from "./components/coffeeDetails/CoffeeDetails.jsx";
import Signin from "./components/Signin.jsx";
import SignUp from "./components/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee />,
      },
      {
        path: "coffee/:id",
        element: <CoffeeDetails />,
      },
      {
        path: 'signin',
        element: <Signin></Signin>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
