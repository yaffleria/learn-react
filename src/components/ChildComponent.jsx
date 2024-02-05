import React from "react";

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, Codemarch</h1>
      <p>This is my first component</p>
      <p>Message: {props.message}</p>
    </div>
  );
}

export default MyComponent;
