import React, { useState } from 'react';
import foodsData from "../../foodsData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './FoodDetails.css';
// import { useParams } from 'react-router-dom';
import FoodCorner from '../FoodCorner/FoodCorner';

const ProductDetails = () => {
    // const { foodkey } = useParams();
    // const food = foodsData.find(fd => fd.key === foodkey);

    //increase decrease handle
    const [count, setCount] = useState(1)
    const increaseHnler = () => {
        setCount(count + 1)
    }

    const DecreaseHnler = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const foodItems = foodsData;

    return (
        <div>
            <div className="foodsDetails">
                {
                    foodItems.map(food =>
                        <div className="foodDetail">
                            <div className="fDetailsContent">
                                <h1 className="Categorise">{food.cat}</h1>
                                <p className="foodLongDisc">{food.longDisc}</p>

                                <div className="priceContainer">
                                    <h2 className="foodPrice">${food.price}</h2>

                                    <div className="incDec">
                                        <button onClick={DecreaseHnler}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>
                                        <span>{count}</span>
                                        <button onClick={increaseHnler}>
                                            <FontAwesomeIcon className="plusIcon" icon={faPlus} />
                                        </button>
                                    </div>
                                </div>

                                <br /><br />
                                <button className="btn btnFull">
                                    <FontAwesomeIcon icon={faShoppingCart} /> Add
                                </button>
                            </div>

                            <div className="detailImg">
                                <img src={food.img} alt="food" />
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default ProductDetails;