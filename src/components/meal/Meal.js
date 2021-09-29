import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import { addDataToLocalStorage } from '../../utilities/localStorage';
import './Meal.css';
const Meal = (props) => {
    let history = useHistory();
    const {idMeal, strMeal, strMealThumb} = props.meal;

    const orderMeal = () => {
        addDataToLocalStorage(strMeal);
    }
    const viewMealDetails = () => {
        history.push(`/meal-details/${idMeal}`)
    }
    return (
        <div>
            <div className="meal">
                <img src={strMealThumb} alt={strMeal} />
                <h3>{strMeal}</h3>
                <div className="meal__card__btn">
                    <Button variant="outlined" color="success" onClick={viewMealDetails}>View details</Button>
                    <Button variant="outlined" onClick={orderMeal}>Order now</Button>
                </div>
            </div>
        </div>
    );
};

export default Meal;