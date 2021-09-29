import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { addDataToLocalStorage } from '../../utilities/localStorage';
import './MealDetails.css';

const MealDetails = () => {
    const {mealId} = useParams();
    const [meal, setMeal] = useState([]);
    let history = useHistory();

    // const {strMeal, strMealThumb, strInstructions} = meal[0];

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [mealId]);

    const orderMeal = () => {
        addDataToLocalStorage(meal[0].strMeal);
    }

    return (
        <div>
            <div className="meal__details">
                <img src={meal[0]?.strMealThumb} alt="" />
                <h2>{meal[0]?.strMeal}</h2>
                <p>{meal[0]?.strInstructions}</p>

                <Button variant="outlined" onClick={orderMeal}>Order now</Button>
            </div>

            <div>
                <Button variant="outlined" onClick={() => history.push('/home')}>Go to home page</Button>
            </div>
        </div>
    );
};

export default MealDetails;