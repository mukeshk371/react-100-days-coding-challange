import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import "./styles/_imports.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Offers from "./components/Offers/Offers";
import Help from "./components/Help/Help";
import NotFound from "./components/NotFound/NotFound";
import { Header } from "./components/Header/Header";

const AppLayout = () => {
  return (
    <div className="app pt-[80px]">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/offers",
        element: <Offers />
      },
      {
        path: "/help",
        element: <Help />
      }
    ],
    errorElement: <NotFound />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
