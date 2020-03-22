import React from 'react';
import deleveryMan from '../../img/Image/delevery-man.png';
import img1 from '../../img/Image/img1.png';
import './LocationMap.css'
const LocationMap = () => {
    return (
        <div className="lacationContainer">
            <div className="map">

            </div>
            <div className="deleveryLocation">
                <div className="deliveryImg">
                    <img src={deleveryMan} alt="" />
                </div>

                <h2>Your Location</h2>
                <p>107 Rd No 8</p>
                <h2>Shop Address</h2>
                <p>Gulshan Plaza Restaura GPR</p>
                <h1>09:30</h1>
                <p>Estimated dalivery time</p>

                <img src={img1} alt="" />
                <h2>Hamim</h2>
                <p>Your raider</p>

                <button className="contactBtn">Contact</button>
            </div>
        </div>
    );
};

export default LocationMap;