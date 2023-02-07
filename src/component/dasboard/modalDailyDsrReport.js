import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import DSR from "../../data/dsrDetail.json";

function TodayDsrReport(props) {
  const { setShow, emp, empName } = props;
  const [empDetail, setEmpDetail] = useState([]);
  const date = new Date();
  const current_date =
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const current_year = date.getFullYear();
  const current_month =
    date.getMonth() < 10 ? 0 + `${date.getMonth() + 1}` : date.getMonth();

    const tdate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const setShowHandler = (value) => {
    setShow(value);
  };


  useEffect(() => {
    if (emp) {
      DSR[current_year].map((data) => {
        const mData= Object.keys(data).map(() => data[current_month]);
        const tData=  mData.map((tData) => tData[current_date]);
        const empData=  tData.map((empData) => empData[emp]);
        const taskData =  empData.map((tData) => tData['taskDetails']);
        if(taskData[0]  !== undefined) {
          setEmpDetail(...taskData);
        }
      });
    }
  }, [emp]);

  console.log(empDetail, empName);
  return (
    <>
      <Modal
        show={true}
        size="xl"
        onHide={() => setShowHandler(false)}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title><h6>{empName} DSR {tdate} </h6></Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            {empDetail.length &&
              empDetail.map((data) => {
                return (
                  <tbody key={data.task_id}>
                    <tr>
                      <th scope="row">{data.task_id}</th>
                      <td>{data.description}</td>
                      <td>{data.type}</td>
                      <td>{data.status}</td>
                      <td>{data.module}</td>
                      <td>{data.acc_story}</td>
                      <td>{data.acc_story}</td>

                      <td>{data.completionDate}</td>
                      <td>{data.attendance}</td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TodayDsrReport;
