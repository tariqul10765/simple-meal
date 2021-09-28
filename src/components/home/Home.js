import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Meal from '../meal/Meal';
import Order from '../order/Order';
import './Home.css';
const Home = () => {
    let foodName = '';
    const [meals, setMeals] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setMeals(data.meals))

        
        // get food by foodName
        if(name){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
        }
    }, [name]);

    const changeHandler = (e) => {
        foodName = e.target.value;
    }
    const submitHandler = () => {
        setName(foodName);
    }
    return (
        <div>
            <header>
                <h1>{'Simple Meal House'.toUpperCase()}</h1>

                <div className="search-field">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={meals.map(meal => meal.strMeal)}
                        onChange={(event, newValue) => {
                            setName(newValue);
                          }}
                        sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} label="Search by meal name..." />}
                    />
                </div>
            </header>

            <main>
                <div className="meals">
                    {
                        meals.map(meal => <Meal
                            key={meal.idMeal} 
                            meal={meal}
                            ></Meal>)
                    }
                </div>
                <div className="orders">
                    <Order></Order>
                </div>
            </main>
        </div>
    );
};

export default Home;