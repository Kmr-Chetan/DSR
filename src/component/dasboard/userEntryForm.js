import { useState } from "react";

export default function UserEntryForm() {
  const [ticketId, setTicketId] = useState("");
  const [rowData, setRowData] = useState([]);
  const [hour, setHour] = useState({});
  const [dueDate, setdueDate] = useState({});

//   const ticketHandler = (event) => {
//     setTicketId(event.target.value);
//   };

//   const hourHandler = (event) => {
//     console.log("test");
//     setHour(event.target.value);
//   };

//   const dueDateHandler = (event) => {
//     setdueDate(event.target.value);
//   };

  const submitHandler = (event) => {
    var object = {};
    event.preventDefault();
    const data = new FormData(event.target);
    data.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    Object.entries(object).map((data) => {
            console.log(data);
    })
    console.log(JSON.parse(json), json);
    setTicketId("");
  };

  const rowHandler = (event) => {
    event.preventDefault();
    console.log("test");
    const string = (
      <>
        <div className="row">
          <div className="col-sm">
            <label htmlFor="ticketId">Ticket ID</label>
            <input
              type="text"
              name="ticketId2"
              className="form-control"
              id="ticketId"
              placeholder="Enter ticketId number"
              required
            />
          </div>
          <div className="col-sm">
            <label htmlFor="ticketId">Hours</label>
            <input
              type="text"
              name="Hours2"
              className="form-control"
              id="Hours2"
              placeholder="Enter total hours"
              required
            />
          </div>
          <div className="col-sm">
            <label htmlFor="ticketId">Due Date</label>
            <input
              type="text"
              name="Due_Date2"
              className="form-control"
              id="Due_Date2"
              placeholder="Enter due date"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="ticketId">Description</label>
            <textarea className="d-block" type="text" />
          </div>
        </div>
      </>
    );

    setRowData((oldArray) => [...oldArray, string]);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <label htmlFor="ticketId">Ticket ID</label>
              <input
                type="text"
                name="ticketId"
                className="form-control"
                id="ticketId"
                placeholder="Enter ticketId number"
                required
              />
            </div>
            {/*............. drop down............... */}
            <div className="col-sm">
              <label htmlFor="ticketId">Hours</label>
              <input
                type="text"
                name="Hours"
                className="form-control"
                id="Hours"
                placeholder="Enter total hours"
                required
              />
            </div>
            <div className="col-sm">
              <label htmlFor="ticketId">Due Date</label>
              <input
                type="text"
                name="Due_Date"
                className="form-control"
                id="Due_Date"
                placeholder="Enter due date"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="ticketId">Description</label>
              <textarea   name="Description" className="d-block" type="text" />
            </div>
          </div>
          <div>
            {rowData.map((data, key) => {
              return <div key={`${data.length + key}`}>{data}</div>;
            })}
          </div>
        </div>

        <button onClick={rowHandler}>Enter a new row</button>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
