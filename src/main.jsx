import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./Homepage";
import ToolsPage from "./ToolsPage";
import { ShopPage, TrainingPage } from "./ShopAndTrainingPages";
import ProToolsPage from "./ProToolsPage";
<main className="max-w-6xl mx-auto px-6 py-16">
  <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 text-center">
    Pro Closing Cost Tool
  </h1>
  <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
    Unlock this advanced tool for accurate buyer & seller closing costs.
    Includes local title fee logic, VA/FHA built in, and export-ready output.
  </p>

  {/* 👉 Here’s the actual embedded calculator */}
  <ProCalculator />

  {/* If you want to keep your old iframe version for now, that can stay below too, or remove it! */}
</main>

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

