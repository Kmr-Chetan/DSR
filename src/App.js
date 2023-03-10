import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/dasboard/dashboard";
import MonthlyDsrReport from "./component/dasboard/monthlyDsrReport.js/monthlyDsrReport";
import UserEntryForm from "./component/dasboard/userEntryForm";
import Header from "./component/header/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route exact path="/UserEntryForm" element={<UserEntryForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
