import React, { useState, useEffect } from 'react';
import './PlanButton.css';

//
import Edamam from '../../api/Edamam.js'

const PlanButton = ({ userSelection, results, setResults }) => {

    const handleClick = async () => {
        const healthList = [];
        const fitnessList = [];
        const selfcareList = [];

        const healthHits = Edamam(userSelection.health);
        healthHits.then(function(result) {
            healthList.push(result[0], result[1], result[2]);
         })

        // make api call to YouTube API
        fitnessList.push('10 min ab workout', 'link to workout', 'image for workout')

        // make api call to YouTube API
        selfcareList.push('Drawing tutorial', 'link to tutorial', 'image for tutorial')

        setResults((results) => ({...results, health: healthList, fitness: fitnessList, selfcare: selfcareList}));
        
    };
    

    return (
        <div>
            <button className={Object.values(userSelection).every(category => (category != '')) ? "plan-btn" : "plan-btn-disabled"} type="button" onClick={handleClick}>Plan My Day</button>
        </div>
    )
};

export default PlanButton