import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './PlanButton.css';
import Youtube from '../../api/youtube';
import Edamam from '../../api/Edamam.js'

const PlanButton = ({ userSelection, results, setResults }) => {

    const handleClick = async () => {
        const healthList = [];
        const fitnessList = [];
        const selfcareList = [];

        const healthHits = await Edamam(userSelection.health);
        // console.log('health', healthHits);
        healthList.push(healthHits[0], healthHits[1], healthHits[2]);

        // make api call to YouTube API
        const fitnessVideo = await Youtube(userSelection.fitness);
        // console.log('fitness', fitnessVideo);
        fitnessList.push(fitnessVideo[0], fitnessVideo[1], fitnessVideo[2]);

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