import React, {useState, useEffect} from "react";
import Navbar from 'react-bootstrap/Navbar'
import './ResultPage.css';
import { motion } from "framer-motion"

const ResultPage = ({results, setResults}) => {

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 1,
        }}
      className="user-card">
            <Navbar className = "bar">
                <Navbar.Brand href="/" className = "nav-title">Be Well</Navbar.Brand>
            </Navbar>
            
            <div className = 'heading'>Today </div>

            <div className="category-container">
                <div className="category-result">Health</div>
                <div className="category-section">
                    <div className="thumbnail">
                        <img src={results.health[2]} width = '300px' height='220px'/>
                    </div>
                    <div className="details">
                        <div className="title">{results.health[0]}</div>
                        <a href={results.health[1]} type="button" target="_blank" className="url-button">See More</a>
                    </div>
                </div>
            </div>
            
            <div className="category-container">
                <div className="category-result">Fitness</div>
                <div className="category-section">
                    <div className="thumbnail">
                        <img src={results.fitness[2]} width = '300px' height='220px'/>
                    </div>
                    <div className="details">
                        <div className="title">{results.fitness[0]}</div>
                        <a href={results.fitness[1]} type="button" target="_blank" className="url-button">See More</a>
                    </div>
                </div>
            </div>
            
            <div className="category-container">
                <div className="category-result">Self Care</div>
                <div className="category-section">
                    <div className="thumbnail">
                        <img src={results.selfcare[2]} width = '300px' height='220px'/>
                    </div>
                    <div className="details">
                        <div className="title">{results.selfcare[0]}</div>
                        <a href={results.selfcare[1]} type="button" target="_blank" className="url-button">See More</a>
                    </div>
                </div>
            </div>
        </motion.div>
        
    );
};

export default ResultPage;
