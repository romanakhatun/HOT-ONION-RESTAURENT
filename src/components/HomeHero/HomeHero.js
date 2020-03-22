import React from 'react';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <div className="homeHero">
            <div className="heroSearch">
                <p>Best food waiting for your belly</p>
                <input type="text" placeholder="Search food items" className="searchInput" />
                <input type="submit" value="Search" className="submit" />
            </div>
        </div>
    );
};

export default HomeHero;