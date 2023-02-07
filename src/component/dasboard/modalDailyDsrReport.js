import Modal from "react-bootstrap/Modal";

function TodayDsrReport(props) {
  const { setShow } = props;
  console.log("pros", props);
  const date = new Date();
  const current_date =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const setShowHandler = (value) => {
    setShow(value);
  };

  return (
    <>
      <Modal
        show={true}
        size="xl"
        onHide={() => setShowHandler(false)}
        scrollable={true}
      >
        <Modal.Header closeButton >
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body >
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
          {/* {task.map((data) => {
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
          })} */}
        </table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TodayDsrReport;
