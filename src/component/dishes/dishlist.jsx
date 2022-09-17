import React, { useContext } from "react";
import {
    Card,
    CardContent,
} from "@material-ui/core";
import { PollContext } from "../../context/context";

const Dishlist = ({ dishes }) => {
    const { dishDisPatcher, voteDisPatcher, setCount } = useContext(PollContext)
    const selection = (e) => {
        let rank = e.target.textContent;
        if (rank === "Rank-1") {
            voteDisPatcher({ type: "RankOne", payLoad: [dishes.id, dishes.name] });
            dishDisPatcher({ type: "RankOne", payLoad: dishes.id });

        }
        else if (rank === "Rank-2") {
            voteDisPatcher({ type: "RankTwo", payLoad: [dishes.id, dishes.name] });
            dishDisPatcher({ type: "RankTwo", payLoad: dishes.id })
            setCount((preCounter) => preCounter + 1);
        }
        else if (rank === "Rank-3") {
            voteDisPatcher({ type: "RankThree", payLoad: [dishes.id, dishes.name] });
            dishDisPatcher({ type: "RankThree", payLoad: dishes.id });
        }
        else {
            voteDisPatcher({ type: "NoRank", payLoad: [dishes.id, dishes.name] });
            dishDisPatcher({ type: "NoRank", payLoad: dishes.id });
        }

    }
    return (
        <>
            <div className="Card">
                <Card>
                    <CardContent>
                        <h3>{dishes.name}</h3>
                        <img className="image" src={dishes.image} alt="" />
                    </CardContent>
                    <div>
                        <ul className="list-group" onClick={selection}>
                            <li
                                className={dishes.rank1 ? "list-group-item active" : "list-group-item"}>
                                Rank-1
                            </li>
                            <li
                                className={dishes.rank2 ? "list-group-item active" : "list-group-item"}>
                                Rank-2
                            </li>
                            <li
                                className={dishes.rank3 ? "list-group-item active" : "list-group-item"}>
                                Rank-3
                            </li>
                            <li
                                className={
                                    dishes.noRank ? "list-group-item active" : "list-group-item"
                                }
                            >
                                No Rank
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Dishlist;