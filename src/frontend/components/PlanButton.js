import React from 'react';
import { Link } from "react-router-dom";
import './PlanButton.css';
import Youtube from '../../api/youtube';
import Edamam from '../../api/Edamam.js'
import SelfCare from '../../api/SelfCare.js'

const PlanButton = ({ userSelection, results, setResults }) => {

    const handleClick = async () => {
        const healthList = [];
        const fitnessList = [];
        const selfcareList = [];

        const healthHits = await Edamam(userSelection.health);
        healthList.push(healthHits[0], healthHits[1], healthHits[2]);

        const fitnessVideo = await Youtube(userSelection.fitness);
        fitnessList.push(fitnessVideo[0], fitnessVideo[1], fitnessVideo[2]);

        const selfCare = SelfCare(userSelection.selfcare);
        selfcareList.push(selfCare[0], selfCare[1], selfCare[2]);
        
   
        setResults((results) => ({...results, health: healthList, fitness: fitnessList, selfcare: selfcareList}));
    };
    

    return (
        <div>
            <Link to="/results">
                <button className={Object.values(userSelection).every(category => (category !== '')) ? "plan-btn enabled" : "plan-btn disabled"} type="button" onClick={Object.values(userSelection).every(category => (category !== '')) ? handleClick : null}>Plan My Day</button>
            </Link>
        </div>
    )
};

export default PlanButton;