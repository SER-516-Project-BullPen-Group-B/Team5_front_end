import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./pages/TaigaService";
import App from "./App";
import LeadTime from "./pages/LeadTime";
import Nav from "./components/Nav";
import reportWebVitals from "./reportWebVitals";
import CFD from "./pages/CFD";
import Niko from "./pages/Niko-Niko";
import ActiveTasks from "./pages/ActiveTasks";
import WIP from "./pages/WIP";
import CycleTime from "./pages/CycleTime";
import Throughput from "./pages/Throughput";
import AcceptedWorkSpread from "./pages/AcceptedWorkSpread";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="taiga-service" element={<Nav render={<Service />} />} />
        <Route path="lead-time" element={<Nav render={<LeadTime />} />} />
        <Route path="cycle-time" element={<Nav render={<CycleTime />} />} />
        <Route path="throughput" element={<Nav render={<Throughput />} />} />
        <Route path="niko-niko" element={<Nav render={<Niko />} />} />
        <Route path="active-tasks" element={<Nav render={<ActiveTasks />} />} />
        <Route path="work-in-progress" element={<Nav render={<WIP />} />} />
        <Route
          path="accepted-work-spread"
          element={<Nav render={<AcceptedWorkSpread />} />}
        />
        <Route
          path="cummulative-flow-diagram"
          element={<Nav render={<CFD />} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
