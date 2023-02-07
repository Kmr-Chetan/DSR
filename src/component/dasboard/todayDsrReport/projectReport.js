import { useState } from "react";
import DSR from "../../../data/dsrDetail.json";
import projecData from "../../../data/projectData.json";
import empData from "../../../data/empDetail.json";
import TodayDsrReport from "../modalDailyDsrReport";

function ProjectWiseData() {
  const [team, setTeam] = useState([]);
  const [emp, setEmp] = useState([]);
  const [empID, setEmpID] = useState([]);
  const [empName, setEmpName] = useState([]);
  const [fullscreen, setFullscreen] = useState(false);
  const [show, setShow] = useState(false);
  const projectHandler = (team) => {
    setTeam(team);
    setEmp([]);
  };

  const teamHandler = (team) => {
    setEmp([]);
    empData.empDetails.forEach((data) => {
      const tempList = data.project.map((tp) => tp.team);
      tempList.forEach((data1, index) => {
        if (data1[index].teamName === team) {
          const temp = [];
          temp.push({ empID: data.empID, empName: data.empName });
          setEmp((oldArray) => [...oldArray, ...temp]);
        }
      });
    });
  };

  const handleShow = (empID, empName) => {
    setEmpID(empID);
    console.log("data.empName", empName);
    setEmpName(empName);
    setShow(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className="list-group" id="list-tab" role="tablist">
            {Object.keys(projecData).map((data) => {
              return projecData[data].map((pData) => {
                return (
                  <a
                    onClick={() => projectHandler(pData.team)}
                    className="list-group-item list-group-item-action"
                  >
                    {pData.projectName}
                  </a>
                );
              });
            })}
          </div>
        </div>
        {team.length > 0 && <div className="col-2  mt-1">
          <div class="card">
            <h4 class="card-header">Team list</h4>
          </div>
          <div className="list-group" id="list-tab" role="tablist">
            {team.map((team) => {
              return (
                <a
                  onClick={() => teamHandler(team)}
                  className="list-group-item list-group-item-action"
                >
                  {team}
                </a>
              );
            })}
          </div>
        </div>}
        {emp.length >0 &&<div class="col-4 mt-3">
          <div class="card">
            <h4 class="card-header">Employee list</h4>
          </div>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              {emp.map((data) => {
                return (
                  <a className="list-group-item list-group-item-action d-flex">
                    {data.empName}
                    <button
                      type="button"
                      onClick={() => handleShow(data.empID, data.empName)}
                      class="btn btn-secondary ml-auto"
                    >
                      DSR status
                    </button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>}
      </div>
      {show && <TodayDsrReport emp={empID} empName= {empName} setShow={(value) => setShow(value)} />}
    </>
  );
}

export default ProjectWiseData;
