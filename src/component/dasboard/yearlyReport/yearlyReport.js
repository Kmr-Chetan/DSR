import { useState } from "react";
import DSR from "../../../data/dsrDetail.json";

function YearlyReport() {
  const [task, setTaskDetail] = useState([]);
  const [team, setTeam] = useState([]);

  const detailHandler = (empData) => {
    setTaskDetail(empData.taskDetails);
  };
  const getTodayDetail = () => {
    if (task.length) {
      return (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Description</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Module</th>
              <th scope="col">Story Point</th>
              <th scope="col">Completion Date</th>
              <th scope="col">Attendance</th>
            </tr>
          </thead>
          {task.map((data) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{data.task_id}</th>
                  <td>{data.description}</td>
                  <td>{data.type}</td>
                  <td>{data.status}</td>
                  <td>{data.module}</td>
                  <td>{data.storyPoint}</td>
                  <td>{data.completionDate}</td>
                  <td>{data.attendance}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      );
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-2">
          <div className="list-group" id="list-tab" role="tablist">
            {Object.keys(DSR).map((data1) => {
              return Object.keys(DSR["2023"][0]["02"]["23"]).map((data) => {
                return (
                  <a
                    className="list-group-item list-group-item-action"
                    onClick={() =>
                      detailHandler(DSR["2023"][0]["02"]["23"][data])
                    }
                  >
                    {data}
                  </a>
                );
              });
            })}
          </div>
        </div>
        <div class="col-8">{getTodayDetail()}</div>
      </div>
    </>
  );
}

export default YearlyReport;
