import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>heading using js format </h1>;

const Heading = () => {
 return <h1>its a functional component without using return keyword</h1>
};

const FunctionWithoutReturnKeyword = () => <h3>function without return keyword </h3>

const HeadingComponent = () => {
  return (
    <div id="container">
      <Heading />
      <FunctionWithoutReturnKeyword />
      <p> its a functional component </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
