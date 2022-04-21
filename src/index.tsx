import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./pages/TaigaService";
import App from "./App";
import LeadTime from "./pages/LeadTime";
import Nav from "./components/Nav";
import NoOfTasksPerDay from "./pages/NoOfTasksPerDay";
import reportWebVitals from "./reportWebVitals";
import CFD from './pages/CFD';
import Niko from "./pages/Niko-Niko";
import CFD2 from "./pages/CFD2";
import ActiveTasks from "./pages/ActiveTasks";
import WIP from "./pages/WIP";
import CycleTime from "./pages/CycleTime";
import ImpedimentTracker from "./pages/ImpedimentTracker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav render={<App />} />} />
        <Route path="taiga-service" element={<Nav render={<Service />} />} />
        <Route path="lead-time" element={<Nav render={<LeadTime />} />} />
        <Route path="cycle-time" element={<Nav render={<CycleTime />} />} />
        <Route
          path="tasks-per-day"
          element={<Nav render={<NoOfTasksPerDay />} />}
        />
        <Route path="niko-niko" element={<Nav render={<Niko />} />} />
        <Route path="active-tasks" element={<Nav render={<ActiveTasks />} />} />
        <Route path="work-in-progress" element={<Nav render={<WIP />} />} />
        <Route path="cfd" element={<Nav render={<CFD2 />} />} />
        <Route path="cummulative-flow-diagram" element={<Nav render={<CFD />} /> } />
        <Route path="impediment-tracker" element={<Nav render={<ImpedimentTracker />} /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
