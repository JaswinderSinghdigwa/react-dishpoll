import React, { useContext } from "react";
import { PollContext} from "../../context/context";
import { useHistory } from "react-router-dom";

const SelectedDishes= () => {
  const navigate = useHistory();
  const { votes } = useContext(PollContext);
  const decsending = votes.reverse();
  console.log(decsending);
  return (
    <div className="row d-flex align-items-center flex-column">
      <div className="my-5 col-sm-5 col-md-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Dish Name</th>
            </tr>
          </thead>
          <tbody>
            {decsending?.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{decsending.length - index}</th>
                  <td>{item}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        className="btn btn-warning"
        style={{ width: "140px" }}
        onClick={() => navigate.push("/main")}
      >
        Go back
      </button>
    </div>
  );
}

export default SelectedDishes;
