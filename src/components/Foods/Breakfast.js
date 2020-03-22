import React from 'react';
import foodsData from '../../foodsData';

const Breakfast = () => {
    const foodItems = foodsData;
    const breakfastFoods = foodItems.filter(food => food.cat === "breakfast");

    return (
        <div className="foodItems">
            {
                breakfastFoods.map(food =>
                    <div className="foodItem">
                        <img src={food.img} alt="food" />
                        <h3 className="foodTitle">{food.title}</h3>
                        <p className="foodShortDisc">{food.shortDisc}</p>
                        <h2 className="foodPrice">${food.price}</h2>
                    </div>
                )
            }
        </div>
    );
};

export default Breakfast;