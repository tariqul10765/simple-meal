import React from 'react';
import './Meal.css';
const Meal = (props) => {
    // console.log('from meal', props.meal);
    const {strMeal, strMealThumb} = props.meal;
    return (
        <div>
            <div className="meal">
                <img src={strMealThumb} alt={strMeal} />
                <h3>{strMeal}</h3>
            </div>
        </div>
    );
};

export default Meal;