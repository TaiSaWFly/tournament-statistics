import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./app/App";

console.log(process.env);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<App />);
