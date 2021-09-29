// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import MealDetails from './components/mealDetails/MealDetails';
import Order from './components/order/Order';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/home/meals/:mealId">
            <Home></Home>
          </Route>

          <Route path="/orders">
            <Order></Order>
          </Route>

          <Route path="/meal-details/:mealId">
            <MealDetails></MealDetails>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
