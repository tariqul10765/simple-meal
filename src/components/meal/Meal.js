import React from 'react';
import { addDataToLocalStorage } from '../../utilities/localStorage';
import './Meal.css';
const Meal = (props) => {
    // console.log('from meal', props.meal);
    const {handleOrder} = props;
    // console.log(props);
    const {strMeal, strMealThumb} = props.meal;

    const orderMeal = () => {
        handleOrder(strMeal);
        addDataToLocalStorage(strMeal);
    }
    return (
        <div>
            <div className="meal">
                <img src={strMealThumb} alt={strMeal} />
                <h3>{strMeal}</h3>
                <button onClick={orderMeal}>Order</button>
            </div>
        </div>
    );
};

export default Meal;