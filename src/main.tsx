import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { clarity } from "react-microsoft-clarity";

clarity.init("kzhxxy2ip7");
clarity.consent();
clarity.setTag("miniapp", "game");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
