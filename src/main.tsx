import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Media from "./pages/media.tsx";
import Work from "./pages/work.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>AAAAAA SOMETHING WENT WRONG</div>,
  },
  {
    path: "/media/*",
    element: <Media />,
  },
  {
    path: "/work/*",
    element: <Work />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
