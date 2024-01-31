import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import "./styles/_imports.scss";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
