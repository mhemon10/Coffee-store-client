import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from './layouts/MainLayouts.jsx';
import Home from './components/home/Home.jsx';
import AddCoffee from './components/addCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/updatecoffee/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    Children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },
      {
        path: 'updateCoffee',
        Component: UpdateCoffee
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,

  </StrictMode>,
)
