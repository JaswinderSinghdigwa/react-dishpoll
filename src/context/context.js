import React, { createContext, useState } from 'react';

const PollContext = createContext();

const getDishes = async () => {
    const response = await fetch(
        `https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`
    );
}

const PollProvider = (props) => {
    const [dish, setDish] = useState([]);
    return (
        <PollContext.Provider value={{ dish, setDish}}>
            {props.children}
        </PollContext.Provider>
    )
}

export { PollContext, PollProvider }