import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Homepage/Home.jsx";

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/servicios", element: <p>Servicios</p> },
      { path: "/about-us", element: <p>Servicios</p> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
