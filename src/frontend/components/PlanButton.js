import React, { useState, useEffect } from 'react';
import './PlanButton.css';

const PlanButton = ({ userSelection }) => {
    const [results, setResults] = useState({
        "title": [],
        "thumbnail": [],
        "url": []
    })

    const handleClick = () => {
        // make api calls
        // use setResults to store api results
        setResults((results) => ({...results, [category]: userSelection[category]=== name ? '' : name,}));
    };

    return (
        <div>
            <button className={Object.values(userSelection).every(category => (category != '')) ? "plan-btn" : "plan-btn-disabled"} type="button" onClick={handleClick}>Plan My Day</button>
        </div>
    )
};

export default PlanButton