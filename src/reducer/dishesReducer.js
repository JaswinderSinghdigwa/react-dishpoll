const dishesReducer = (state, { type, payLoad }) => {
  const dummy = state.slice();
  switch (type) {
    case "ADD_DISHES":
      return payLoad;
    case "RankOne":
      for (let dish of dummy) {
        if (dish.id === payLoad) {
          dish.rank1 = true;
          dish.rank2 = false;
          dish.rank3 = false;
          dish.noRank = false;
        } else {
          dish.rank1 = false
        }
      }
      return dummy;
    case "RankTwo":
      for (let dish of dummy) {
        if (dish.id === payLoad) {
          dish.rank1 = false;
          dish.rank2 = true;
          dish.rank3 = false;
          dish.noRank = false;
        } else {
          dish.rank2 = false
        }
      }
      return dummy;
    case "RankThree":
      for (let dish of dummy) {
        if (dish.id === payLoad) {
          dish.rank1 = false;
          dish.rank2 = false;
          dish.rank3 = true;
          dish.noRank = false;
        } else {
          dish.rank3 = false
        }
      }
      return dummy;

    case "NoRank":
      for (let dish of dummy) {
        if (dish.id === payLoad) {
          dish.rank1 = false;
          dish.rank2 = false;
          dish.rank3 = false;
          dish.noRank = true;
        }
      }
      return dummy;
    default:
      return state;
  }
};

export default dishesReducer;
