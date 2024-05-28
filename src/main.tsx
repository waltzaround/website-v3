import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Media from "./pages/media.tsx";
import Work from "./pages/work.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Error from "./pages/Error.tsx";
import Cin7 from "./pages/case-studies/Cin7.tsx";
import Samsung from "./pages/case-studies/Samsung.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/media/*",
    element: <Media />,
  },
  {
    path: "/work/",
    element: <Work />,
  },
  {
    path: "/about/*",
    element: <About />,
  },
  {
    path: "/contact/*",
    element: <Contact />,
  },
  {
    path: "/work/cin7",
    element: <Cin7 />,
  },
  {
    path: "/work/samsung",
    element: <Samsung />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
