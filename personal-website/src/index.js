import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App() {
  return (
    <div>
      <h1 style={{ color: "#128743" }}>Hi, I'm Martin!</h1>
      <h2>
        I'm a 4th Year MEng Computer Science (Human Computer Interaction)
        student at the University of Manchester
      </h2>
    </div>
  );
}

root.render(<App />);
