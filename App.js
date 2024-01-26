import React from "react";
import ReactDOM from "react-dom";

// Single element.
const heading = React.createElement(
    "h1",
    { className: "main-div", id: "mainDiv" },
    "Hello World From React!"
);

// Simple Nested elements

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "Header 1"),
            React.createElement("h2", {}, "Header 2")
        ]
    )
);

// Complex Nested elements

const complexNestedElement = React.createElement("div", { className: "row" },
    [
        React.createElement("section", { className: "col-12 header" },
            React.createElement("h1", {}, "Header")
        ),
        React.createElement("section", { className: "col-6 left-section" },
            React.createElement("h2", {}, "Left Section",
                React.createElement("ul", {},
                    [
                        React.createElement('li', {}, 'One'),
                        React.createElement('li', {}, 'Two'),
                        React.createElement('li', {}, 'Three'),
                        React.createElement('li', {}, 'Four'),
                    ]
                )
            )
        ),
        React.createElement("section", { className: "col-6 right-section" },
            React.createElement("h2", {}, "Right Section",
                React.createElement("ul", {},
                    [
                        React.createElement('li', {}, 'One'),
                        React.createElement('li', {}, 'Two'),
                        React.createElement('li', {}, 'Three'),
                        React.createElement('li', {}, 'Four'),
                    ]
                )
            )
        ),
        React.createElement("section", { className: "col-12 footer" },
            React.createElement("h1", {}, "Footer")
        )
    ]
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // This code will not apply
root.render(complexNestedElement); // This code will apply
console.log(complexNestedElement);