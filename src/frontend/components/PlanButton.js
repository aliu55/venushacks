import React, { useState, useEffect } from 'react';
import './PlanButton.css';
import Youtube from '../../api/youtube';

const PlanButton = ({ userSelection, results, setResults }) => {

    const handleClick = async () => {
        const healthList = [];
        const fitnessList = [];
        const selfcareList = [];
        // use setResults to store api results
        
        // make api call to Edamam API
        healthList.push('Breakfast Sandwich', 'link to recipe', 'image to recipe')

        // make api call to YouTube API
        const fitnessVideo = Youtube(userSelection.fitness);
        fitnessVideo.then((response) => {
            console.log(response);
            fitnessList.push(response[0], response[1], response[2]);
        });
        
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