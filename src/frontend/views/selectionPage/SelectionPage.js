import React, {useState, useEffect} from "react";
import Choice from '../../components/Choice.js';
import './SelectionPage.css';
import PlanButton from '../../components/PlanButton.js';


const SelectionPage = ({ userSelection, setUserSelection }) => {
    const [results, setResults] = useState({
        "health": [],
        "fitness": [],
        "selfcare": []
    })

    useEffect(() => {
        console.log(userSelection); 
        console.log(results);
    }, [userSelection, results]);

    return (
        <div>
                    
        
            <div className = 'category'>Health</div>
            <div className="flex-container">
                <div className="choice"><Choice category="health" name="breakfast" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
                <div className="choice"><Choice category="health" name="lunch" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
                <div className="choice"><Choice category='health' name = 'dinner' userSelection = {userSelection} setUserSelection  = {setUserSelection}/></div>
            </div>

            <div className = 'category'>Fitness</div>
            <div className="flex-container">
                <div className="choice"><Choice category="fitness" name="5 min" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
                <div className="choice"><Choice category='fitness' name = '15 min' userSelection = {userSelection} setUserSelection  = {setUserSelection} /></div>
                <div className="choice"><Choice category="fitness" name="30 min" userSelection={userSelection} setUserSelection={setUserSelection}/></div>
            </div>

            <div className = 'category'>Self Care</div>
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
