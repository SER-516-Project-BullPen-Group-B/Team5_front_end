import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./pages/TaigaService";
import PolarChart from "./pages/PolarChart";
import App from "./App";
import LeadTime from "./pages/LeadTime";
import NoOfTasksPerDay from "./pages/NoOfTasksPerDay";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="taiga-service" element={<Service />} />
        <Route path="lead-time" element={<LeadTime />} />
        <Route path="tasks-per-day" element={<NoOfTasksPerDay />} />
        <Route path="PolarChart" element={<PolarChart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
