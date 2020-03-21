import React from 'react';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <div className="homeHero">
            <div className="heroSearch">
                <input type="text" placeholder="Search food items" className="searchInput" />
                <input type="submit" value="Search" className="submit" />
            </div>
        </div>
    );
};

export default HomeHero;