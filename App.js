import React from "react";
import ReactDOM from "react-dom";

// React Element
const Header = () => {
  return (
    <header className="header" tabIndex={5}>
      <h2>Header</h2>
    </header>
  );
};

const myName = "Mukesh";

// React Functional Component
const Heading = () => {
  return (
    <div id="container" className="container">
      <Header />
      <h2>{myName}</h2>
      <span>{20/30}</span>
      <h1 className="heading" tabIndex={5}>
        React 100 Days Coding Challenge 🚀
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
