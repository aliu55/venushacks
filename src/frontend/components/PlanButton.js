import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './PlanButton.css';

const PlanButton = ({ userSelection, results, setResults }) => {

    const handleClick = async () => {
        const healthList = [];
        const fitnessList = [];
        const selfcareList = [];
        // use setResults to store api results
        
        // make api call to Edamam API
        healthList.push('Breakfast Sandwich', 'https://www.w3schools.com/tags/att_a_href.asp', 'image to recipe')

        // make api call to YouTube API
        fitnessList.push('10 min ab workout', 'https://www.w3schools.com/tags/att_a_href.asp', 'image for workout')

        // make api call to YouTube API
        selfcareList.push('Drawing tutorial', 'https://www.w3schools.com/tags/att_a_href.asp', 'image for tutorial')

        setResults((results) => ({...results, health: healthList, fitness: fitnessList, selfcare: selfcareList}));
        
    };
    

    return (
        <div>
            <Link to="/results">
                <button className={Object.values(userSelection).every(category => (category !== '')) ? "plan-btn" : "plan-btn-disabled"} type="button" onClick={handleClick}>Plan My Day</button>
            </Link>
        </div>
    )
};

export default PlanButton