import * as React from "react";
import type { RouteObject } from "react-router-dom";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return <div>Homepage</div>;
};

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
];
