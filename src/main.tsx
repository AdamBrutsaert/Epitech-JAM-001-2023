import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/tailwind.css";

import Menu from "pages/Menu";
import Memo from "pages/Memo";

const router = createBrowserRouter([
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/",
    element: <Menu />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
