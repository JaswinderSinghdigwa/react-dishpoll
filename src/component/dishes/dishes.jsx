import React, { useContext } from 'react';
import {PollContext} from '../../context/context';
import './dishes.css';
import Header from '../header/header';
import Dishlist from './dishlist';


const Dish = () => {
    const {dish,votes} = useContext(PollContext);
    console.log("dish",dish,votes)
    return (
        <>
            <div className='App'>
            <Header />
            <div className="dishes-container container">
            <div className="recipes">
                {dish && dish?.map((dishes, index) => (
                    <Dishlist
                        dishes={dishes}
                        key={index}
                    />
                ))}
            </div>
            </div>
            </div>
        </>
    )
}

export default Dish;