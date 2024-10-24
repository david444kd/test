import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router>
        <div className="w-full h-full justify-center items-center sm:flex">
          <div className="h-screen">
            <App />
          </div>
        </div>
      </Router>
    </NextUIProvider>
  </React.StrictMode>
);
