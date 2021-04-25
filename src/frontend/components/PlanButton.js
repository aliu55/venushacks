import React, { useState, useEffect } from 'react';
import './PlanButton.css';

const PlanButton = ({ userSelection, results, setResults }) => {

    const handleClick = () => {
        const healthList = [];
        const fitnessList = [];
        const selfcareList = [];
        // use setResults to store api results
        
        // make api call to Edamam API
        healthList.push('Breakfast Sandwich', 'link to recipe', 'image to recipe')

        // make api call to YouTube API
        fitnessList.push('10 min ab workout', 'link to workout', 'image for workout')

        // make api call to YouTube API
        selfcareList.push('Drawing tutorial', 'link to tutorial', 'image for tutorial')

        setResults((results) => ({...results, title: healthList, fitness: fitnessList, selfcare: selfcareList}));
        
    };
    

    return (
        <div>
            <button className={Object.values(userSelection).every(category => (category != '')) ? "plan-btn" : "plan-btn-disabled"} type="button" onClick={handleClick}>Plan My Day</button>
        </div>
    )
};

export default PlanButton