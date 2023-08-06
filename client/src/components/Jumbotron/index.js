import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 2560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;