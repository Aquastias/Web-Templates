import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  ScrollRestoration,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { routes } from "@/routes";
import { Root } from "@/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Root>
        <ScrollRestoration />
        <Outlet />
      </Root>
    ),
    children: [...routes],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
