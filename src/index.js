import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ResultContextProvider } from "./context/ResultContextProvider";
import { BrowserRouter, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>
);
