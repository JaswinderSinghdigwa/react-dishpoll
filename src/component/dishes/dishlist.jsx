import React,{useContext}from "react";
import {
    Card,
    CardContent,
  } from "@material-ui/core";
import { PollContext } from "../../context/context";

const Dishlist = ({dishes}) => {
    const {setDish ,setVotes} = useContext(PollContext)
    const selection = (e) =>{
        let rank = e.target.textContent;
        if (rank === "RankOne") {
            setVotes({ type: "RankOne", payLoad: [dishes.id, dishes.name] });
            setDish({ type: "RankOne", payLoad: dishes.id });
        }
        else if (rank === "RankTwo") {
            setVotes({ type: "RankTwo", payLoad: [dishes.id, dishes.name] });
            setDish({ type: "RankTwo", payLoad: dishes.id });
        }
        else if (rank === "RankThree") {
            setVotes({ type: "RankThree", payLoad: [dishes.id, dishes.name] });
            setDish({ type: "RankThree", payLoad: dishes.id });
        }
        else{
            setVotes({ type: "NoRank", payLoad: [dishes.id, dishes.name] });
            setDish({ type: "NoRank", payLoad: dishes.id });
        }

    }
    return (
        <>
            <Card>
                <CardContent>
                    <h1>{dishes.name}</h1>
                    <img className="image" src={dishes.image} alt="" />
                </CardContent>
                <ul className="list-group" onChange={selection}>
                    <li
                        className={dishes.rank1 ? "list-group-item active" : "list-group-item"}>
                        Rank 1
                    </li>
                    <li
                        className={dishes.rank2 ? "list-group-item active" : "list-group-item"}>
                        Rank 2
                    </li>
                    <li
                        className={dishes.rank3 ? "list-group-item active" : "list-group-item"}>
                        Rank 3
                    </li>
                    <li
                        className={
                            dishes.noRank ? "list-group-item active" : "list-group-item"
                        }
                    >
                        No Rank
                    </li>
                </ul>
            </Card>

        </>
    )
}

export default Dishlist;