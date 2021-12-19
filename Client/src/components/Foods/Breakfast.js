import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import foodsData from "../../foodsData";

const Breakfast = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://red-onion-restaurant-r.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);

  const breakfastFoods = foods.filter((food) => food.cat === "breakfast");

  const addFoods = () => {
    fetch("http://localhost:4000/addFood", {
      method: "POST",
      headers: {
        "content-type": "application-json",
      },
      body: JSON.stringify(foodsData[0]),
    });
  };
  console.log(foodsData[0]);

  return (
    <div className="foodItems">
      <button onClick={addFoods}>add foods</button>

      {breakfastFoods.map((food) => (
        <div className="foodItem">
          <Link to={"/food/" + food.key}>
            <img src={food.img} alt="food" />
          </Link>
          <h3>
            <Link to={"/food/" + food.key} className="foodTitle">
              {food.title}
            </Link>
          </h3>
          <p className="foodShortDisc">{food.shortDisc}</p>
          <h2 className="foodPrice">${food.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Breakfast;
