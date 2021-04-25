import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './PlanButton.css';
import Youtube from '../../api/youtube';
import Edamam from '../../api/Edamam.js'

const PlanButton = ({ userSelection, results, setResults }) => {

    const handleClick = () => {
        const healthList = [];
        const fitnessList = [];
        const selfcareList = [];

        const healthHits = Edamam(userSelection.health);
        healthHits.then(function(result) {
            console.log('health', result);
            healthList.push(result[0], result[1], result[2]);
         });

        // make api call to YouTube API
        const fitnessVideo = Youtube(userSelection.fitness);
        fitnessVideo.then((response) => {
            console.log('fitness', response);
            fitnessList.push(response[0], response[1], response[2]);
        });
        
        // make api call to YouTube API
        selfcareList.push('Drawing tutorial', 'https://www.w3schools.com/tags/att_a_href.asp', 'image for tutorial')
        
        console.log("results before setting", healthList, fitnessList);
        console.log(results);
        setResults((results) => ({...results, health: healthList, fitness: fitnessList, selfcare: selfcareList}));
        console.log(results);
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