import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "website using react cdn links"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // rendering

