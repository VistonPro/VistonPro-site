import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./Homepage";
import ToolsPage from "./ToolsPage";
import { ShopPage, TrainingPage } from "./ShopAndTrainingPages";
import ProToolsPage from "./ProToolsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/pro-tools" element={<ProToolsPage />} />
    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

