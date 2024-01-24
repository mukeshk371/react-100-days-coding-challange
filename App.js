// Single element.
const heading = React.createElement(
    "h1",
    { className: "main-div", id: "mainDiv" },
    "Hello World From React!"
);

// Nested elements

const parent = React.createElement("div",{ id: "parent" },
    React.createElement("div",{ id: "child" },
        [
            React.createElement("h1",{},"Header 1"),
            React.createElement("h2",{},"Header 2")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);