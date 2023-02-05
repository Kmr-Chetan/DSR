import DSR from "../../../data/dsrDetail.json";

function DailyChart() {

  Object.keys(DSR).forEach((data) => {
    console.log(DSR["2023"][0]["02"]["23/02/2023"]);
  });


  const detailHandler =() => {

  }

  return (
    <>
      <div class="row">
        <div class="col-2">
          <div class="list-group" id="list-tab" role="tablist">
            {Object.keys(DSR).map((data) => {
              return Object.keys(DSR["2023"][0]["02"]["23"]).map(
                (data) => {
                  return (
                    <a class="list-group-item list-group-item-action" onClick={detailHandler} >
                      {data}
                    </a>
                  );
                }
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyChart;
