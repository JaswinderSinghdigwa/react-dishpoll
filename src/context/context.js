import React, { createContext,useState,useEffect, useReducer} from "react";
import axios from 'axios'
import dishesReducer from "../reducer/dishesReducer";
import votesReducer from "../reducer/votesReducer";

export const PollContext = createContext();

const getDishes = async () => {
  const res = await axios.get(
        "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    );
    return res.data;
};

const PollProvider = ({ children }) => {
  const [dish, dishDisPatcher] = useReducer(dishesReducer, []);
  const [count, setCount] = useState(0);
  const [votes, voteDisPatcher] = useReducer(votesReducer, []);

  useEffect(() => {
    getDishes().then((data) => {
      const dummy = dish.slice();
      data.map((item) => {
        dummy.push({
          id: item.id,
          name: item.dishName,
          description: item.description,
          noRank: false,
          rank1: false,
          rank2: false,
          rank3: false,
        });
      });

      dishDisPatcher({ type: "ADD_DISHES", payLoad: dummy });
    });
  }, []);

  return (
    <PollContext.Provider value={{ dish, votes,count,setCount, dishDisPatcher, voteDisPatcher }}>
      {children}
    </PollContext.Provider>
  );
}

export default PollProvider;
