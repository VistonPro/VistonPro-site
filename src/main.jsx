import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./Homepage";
import ToolsPage from "./ToolsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
