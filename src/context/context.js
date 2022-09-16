import React, { createContext, useEffect, useState } from 'react';
import dishesReducer from '../component/reducer/dishesReducer';
import voteReducer from '../component/reducer/votesReducer';

const PollContext = createContext();

const getDishes = async () => {
    const response = await fetch(
        `https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`
    );
    return response.json()
}

const PollProvider = (props) => {
    const [dish, setDish] = useState(dishesReducer,[]);
    const [votes ,setVotes] = useState(voteReducer,[]);
    useEffect(()=>{
        getDishes().then((collection)=>{
            const dummy = dish.slice();
            collection.map((item)=>{
                dummy.push({
                id:item.id,
                name:item.PollContextdishName,
                description:item.description,
                noRank:false,
                rank1:false,
                rank2:false,
                rank3:false,
            });
        });
        dish({type : "AddDishes" ,payload : dummy})
        });
    },[])
    
    return (
        <PollContext.Provider value={{ dish,votes,setDish,setVotes}}>
            {props.children}
        </PollContext.Provider>
    )
}

export { PollContext, PollProvider }