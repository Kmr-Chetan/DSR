import DSR from "../../data/dsrDetail.json";
import YearlyReport from "./yearlyReport/yearlyReport";
import Nav from "react-bootstrap/Nav";
import ProjectWiseData from "./todayDsrReport/projectReport";
import { Card } from "react-bootstrap";
import MonthlyDsrReport from "./monthlyDsrReport.js/monthlyDsrReport";
import { useState } from "react";
function Tracker() {
  const [location, setLoction] = useState("");

  const date = new Date();
  const current_date =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  console.log(window.location.pathname);
  const path = window.location.pathname;
  const locationHandler = (loc) => {
    setLoction(loc);
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link
                active={location === "ProjectWiseData"}
                onClick={() => locationHandler("ProjectWiseData")}
              >
                <h6>{current_date} DSR Status</h6>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location === "monthlyDsrReport"}
                onClick={() => locationHandler("monthlyDsrReport")}
              >
                <h6>Monthly DSR Report</h6>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={location === "startPerformer"}
                onClick={() => locationHandler("startPerformer")}
              >
                <h6>Star performer</h6>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
      </Card>
      {location === "monthlyDsrReport" && <MonthlyDsrReport />}
      {location === "ProjectWiseData" && <ProjectWiseData />}
    </>
  );
}

export default Tracker;
