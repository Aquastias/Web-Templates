import HomePage from "@/pages/Homepage";
import Dashboard from "@/pages/Dashboard";
import { Outlet } from "react-router-dom";

import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
];
