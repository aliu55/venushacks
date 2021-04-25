import React, {useState, useEffect} from "react";
import Navbar from 'react-bootstrap/Navbar'
import './ResultPage.css';

const IMG = "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"

const ResultPage = ({results, setResults}) => {
    
    console.log('helo');
    console.log(results);
    console.log(results.health[0]);
    // for category in reslts:
    // make title results[category][0]
    // make image results[category][1]


    return (
        <div>
            <Navbar className = "bar">
                <Navbar.Brand href="/" className = "title">Plan your day with [insert name]!</Navbar.Brand>
            </Navbar>
            
            <div className = 'heading'>Today </div>

            <div className="category-container">
                <div className="category-result">Health</div>
                <div className="category-section">
                    <div className="thumbnail">
                        <img src={results.health[2]} width = '300px' height='200px'/>
                    </div>
                    <div className="details">
                        <div className="title">{results.health[0]}</div>
                        <div className="url">
                            <a href={results.health[1]} target="_blank">See More</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="category-container">
                <div className="category-result">Fitness</div>
                <div className="category-section">
                    <div className="thumbnail">
                        <img src={results.fitness[2]} width = '300px' height='200px'/>
                    </div>
                    <div className="details">
                        <div className="title">{results.fitness[0]}</div>
                        <div className="url">
                            <a href={results.fitness[1]} target="_blank">See More</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="category-container">
                <div className="category-result">Self Care</div>
                <div className="category-section">
                    <div className="thumbnail">
                        <img src={IMG} width = '300px' height='200px'/>
                    </div>
                    <div className="details">
                        <div className="title">{results.selfcare[0]}</div>
                        <div className="url">
                            <a href={results.fitness[1]} target="_blank">See More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ResultPage;

// const [results, setResults] = useState({
//     "health": [],
//     "fitness": [],
//     "selfcare": []
// });
    