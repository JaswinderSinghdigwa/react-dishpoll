import React, { useContext } from 'react';
import {PollContext} from '../../context/context';
import './dishes.css';
import Header from '../header/header';
import Dishlist from './dishlist';


const Dish = () => {
    const {dish} = useContext(PollContext);
    console.log("dish",dish)
    return (
        <>
            <Header />
            <div className='App'>
            <div className="recipes">
                {dish && dish?.map((dishes, index) => (
                    <Dishlist
                        dishes={dishes}
                        key={index}
                    />
                ))}
            </div>
            </div>
        </>
    )
}

export default Dish;