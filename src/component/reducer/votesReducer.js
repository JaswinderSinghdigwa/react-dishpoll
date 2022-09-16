const voteReducer = (state, { type, payload }) => {
    const dummy = state.slice();

    switch (type) {
        case "RankOne":
            dummy[0] = '';
            dummy[0] = payload[1];
            return dummy;

        case "RankTwo":
            dummy[1] = '';
            dummy[1] = payload[1];
            return dummy;

        case "RankThree":
            dummy[2] = '';
            dummy[2] = payload[1];
            return dummy;

        case "NoRank":
            for (let i in dummy) {
                if( i === payload[0]){
                i[0] = 'NoRank';
                i[1] = 'NoRank';
                i[2] = 'NoRank';
            }
            }
            return dummy;

        default:
            return state;
    }
}

export default voteReducer;