import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Meal from '../meal/Meal';
import './Home.css';
import { IconButton, styled, Badge  } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Home = () => {
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

    // const changeHandler = (e) => {
    //     foodName = e.target.value;
    // }
    // const submitHandler = () => {
    //     setName(foodName);
    // }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
    return (
        <div>
            <header>
                <div className="navigation">
                    <h1>{'Simple Meal House'.toUpperCase()}</h1>
                </div>

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


                    <div>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={5} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </div>
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
                {/* <div className="orders">
                    <Order></Order>
                </div> */}
            </main>
        </div>
    );
};

export default Home;