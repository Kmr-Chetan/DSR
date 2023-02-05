import DSR from "../../data/dsrDetail.json";
import DailyChart from "./dailyReport/dailyChart";
function Tracker() {
  // const [first, setfirst] = useState([]);

  Object.keys(DSR).forEach((data) => {
    console.log(DSR["2023"][0]["02"]["23/02/2023"]);
  });

  return (
    <>
      <div>Today DSR status</div>
      <DailyChart />
    </>
  );
}

export default Tracker;
