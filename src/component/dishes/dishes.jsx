import React, { useContext } from 'react';
import { PollProvider } from '../../context/context';
import './dishes.css';
import Header from '../header/header';
import Dishlist from './dishlist';

const Dish = () => {
    const { dish } = useContext(PollProvider);
    return (
        <>
            <Header />
            <div className='App'>
            <div className="recipes">
                {dish && dish.map((dishes, index) => (
                    <Dishlist
                        dishes={dishes}
                        key={index}
                        image={dishes.image}
                        name={dishes.name}
                    />
                ))}
            </div>
            </div>
        </>
    )
}

export default Dish;