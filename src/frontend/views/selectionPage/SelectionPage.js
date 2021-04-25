import React, { useEffect } from "react";
import Choice from '../../components/Choice.js';
import './SelectionPage.css';
import PlanButton from '../../components/PlanButton.js';
import Navbar from 'react-bootstrap/Navbar'

const activitiesList = ['journaling', 'drawing', 'nap', 'cat video', 'meme', 'meditate'];

const chooseRandom = () => {
    var chosen = [];
    while (chosen.length < 3){
        const randIndex = Math.floor(activitiesList.length * Math.random());
        if (!chosen.includes(randIndex)) {
            chosen.push(randIndex);
        }
    }
    return ([
        {name:activitiesList[chosen[0]]},
        {name:activitiesList[chosen[1]]},
        {name:activitiesList[chosen[2]]},
    ])
};

const selfcare = chooseRandom();

const SelectionPage = ({ userSelection, setUserSelection, results, setResults}) => {
    

    useEffect(() => {
        console.log(userSelection); 
        console.log();
        console.log(results);
        
    }, [userSelection, results]);

    const health = [
        {name:"breakfast"},
        {name:"lunch"},
        {name:"dinner"},
    ];
    
    const fitness = [
        {name:"5 min"},
        {name:"10 min"},
        {name:"30 min"},
    ];

    


    return (
        <div>
                    
            <Navbar className = "bar">
                <Navbar.Brand href="/" className = "nav-title">Be Well</Navbar.Brand>
            </Navbar>

                <div className="topic-container">
                    <div className = 'category-selection'>Health</div>
                    <div className="choice-flex-container">
                        {health.map(option =>(<div className="choice"><Choice category="health" name={option.name} userSelection={userSelection} setUserSelection={setUserSelection}/></div>))}
                    </div>
                </div>


                <div className="topic-container">
                    <div className = 'category-selection'>Fitness</div>
                    <div className="choice-flex-container">
                        {fitness.map(option =>(<div className="choice"><Choice category="fitness" name={option.name} userSelection={userSelection} setUserSelection={setUserSelection}/></div>))}
                    </div>
                </div>

                <div className="topic-container">
                    <div className = 'category-selection'>Self Care</div>
                    <div className="choice-flex-container">
                        {selfcare.map(option =>(<div className="choice"><Choice category="selfcare" name={option.name} userSelection={userSelection} setUserSelection={setUserSelection}/></div>))}
                    </div>
                </div>

                <div className="choice-flex-container">
                    <PlanButton userSelection={userSelection} results={results} setResults={setResults}/>
                </div>
            
        </div>
    )
};

export default SelectionPage;
