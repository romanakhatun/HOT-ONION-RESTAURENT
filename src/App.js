import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FoodCorner from './components/FoodCorner/FoodCorner';
import Lunch from './components/Foods/Lunch';
import Breakfast from './components/Foods/Breakfast';
import Dinner from './components/Foods/Dinner';
import ChooseDelivery from './components/ChooseDelivery/ChooseDelivery';
import Header from './components/Header/Header';
import HomeHero from './components/HomeHero/HomeHero';
import LocationMap from './components/LocationMap/LocationMap';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HomeHero />

        <FoodCorner />
        <div className="foodCorner">
          <Switch>
            <Route exact path="/" component={Lunch} />
            <Route exact path="/breackfast" component={Breakfast} />
            <Route exact path="/dinner" component={Dinner} />
          </Switch>
        </div>

        <ChooseDelivery />
        <LocationMap />
      </Router>
    </div >
  );
}

export default App;




