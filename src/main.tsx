import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./components/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Media from "./pages/media.tsx";
import Work from "./pages/work.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Error from "./pages/Error.tsx";
import Cin7 from "./pages/case-studies/Cin7.tsx";
import Samsung from "./pages/case-studies/Samsung.tsx";
import Swiftly from "./pages/case-studies/Swiftly.tsx";
import Vaxx from "./pages/case-studies/vaxx.tsx";
import Maths from "./pages/case-studies/maths.tsx";

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
    path: "/about/*",
    element: <About />,
  },
  {
    path: "/contact/*",
    element: <Contact />,
  },
  {
    path: "/work/",
    element: <Work />,
  },

  {
    path: "/work/cin7/*",
    element: <Cin7 />,
  },
  {
    path: "/work/samsung/*",
    element: <Samsung />,
  },
  {
    path: "/work/swiftly/*",
    element: <Swiftly />,
  },
  {
    path: "/work/vaxx/*",
    element: <Vaxx />,
  },
  {
    path: "/work/maths/*",
    element: <Maths />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
