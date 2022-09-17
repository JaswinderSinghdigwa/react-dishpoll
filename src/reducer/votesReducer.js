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
          i[0] = 'NoRank';
          i[1] = 'NoRank';
          i[2] = 'NoRank';
        }
      }

      return dummy;
    default:
      return state;
  }
};

export default votesReducer;
