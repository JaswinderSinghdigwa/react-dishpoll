import React from "react";

const Dishlist = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <h1>{dishes.name}</h1>
                    <img className="image" src={votes.image} alt="" />
                </CardContent>
                <ul className="list-group">
                    <li
                        className={item.r1 ? "list-group-item active" : "list-group-item"}>
                        Rank 1
                    </li>
                    <li
                        className={item.r2 ? "list-group-item active" : "list-group-item"}>
                        Rank 2
                    </li>
                    <li
                        className={item.r3 ? "list-group-item active" : "list-group-item"}>
                        Rank 3
                    </li>
                    <li
                        className={
                            item.noRank ? "list-group-item active" : "list-group-item"
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