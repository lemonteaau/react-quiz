import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizProvider } from "./components/context/QuizProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QuizProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QuizProvider>
);
