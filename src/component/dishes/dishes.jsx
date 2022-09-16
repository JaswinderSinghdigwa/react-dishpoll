import React, { useContext } from 'react';
import { PollProvider } from '../../Context/context';
import './dishes.css';
import Header from '../header';

const Dish = () => {
    const { dish } = useContext(PollProvider);
    return (
        <>
            <Header />
            <div className="recipes">
                {dish && dish.map((dishes, index) => (
                    <Dishlist
                        dishes={dishes}
                        key={dishes.id}
                    />
                ))}
            </div>
        </>
    )
}

export default Dish;