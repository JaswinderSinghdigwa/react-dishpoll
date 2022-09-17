const votesReducer = (state, { type, payLoad }) => {
  const dummy = state.slice();
  switch (type) {
    case "RankOne":
        dummy[0] = '';
        dummy[0] = payLoad[1];
        return dummy;
    case "RankTwo":
        dummy[1] = '';
        dummy[1] = payLoad[1];
        return dummy;
    case "RankThree":
        dummy[2] = '';
        dummy[2] = payLoad[1];
        return dummy;

    case "NoRank":
      for (let i in dummy) {
        if (i === payLoad[0]) {
          i[0] = 'No Rank';
          i[1] = 'No Rank';
          i[2] = 'No Rank';
        }
      }

      return dummy;

    default:
      return state;
  }
};

export default votesReducer;
