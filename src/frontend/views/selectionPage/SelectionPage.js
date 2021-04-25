import React, {useState, useEffect} from "react";
import Choice from '../../components/Choice.js';
import './SelectionPage.css';
import PlanButton from '../../components/PlanButton.js';
import Navbar from 'react-bootstrap/Navbar'


const SelectionPage = ({ userSelection, setUserSelection, results, setResults}) => {

    useEffect(() => {
        console.log(userSelection); 
        console.log();
        console.log(results);
    }, [userSelection, results]);

    return (
        <div>
                    
            <Navbar className = "bar">
                <Navbar.Brand href="/" className = "title-selection">Plan your day with [insert name]!</Navbar.Brand>
            </Navbar>

            <div className = 'category-selection'>Health</div>
            <div className="flex-container">
                <div className="choice"><Choice category="health" name="breakfast" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
                <div className="choice"><Choice category="health" name="lunch" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
                <div className="choice"><Choice category='health' name = 'dinner' userSelection = {userSelection} setUserSelection  = {setUserSelection}/></div>
            </div>

            <div className = 'category-selection'>Fitness</div>
            <div className="flex-container">
                <div className="choice"><Choice category="fitness" name="5 min" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
                <div className="choice"><Choice category='fitness' name = '15 min' userSelection = {userSelection} setUserSelection  = {setUserSelection} /></div>
                <div className="choice"><Choice category="fitness" name="30 min" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
            </div>

            <div className = 'category-selection'>Self Care</div>
            <div className="flex-container">
                <div className="choice"><Choice category="selfcare" name="Journaling" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
                <div className="choice"><Choice category='selfcare' name = 'Netflix and Chill' userSelection = {userSelection} setUserSelection  = {setUserSelection} /></div>
                <div className="choice"><Choice category="selfcare" name="Drawing" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
            </div>
            <div className="flex-container">
                <PlanButton userSelection={userSelection} results={results} setResults={setResults}/>
            </div>
        </div>
    )
};

export default SelectionPage;
