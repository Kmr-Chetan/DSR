import { Route, Routes } from "react-router-dom";
import MonthlyDsrReport from "./monthlyDsrReport.js/monthlyDsrReport";
import Tracker from "./tracker";
import UserEntryForm from "./userEntryForm";

function Dashboard() {
  return (
    <>
      <Tracker />
    </>
  );
}

export default Dashboard;
