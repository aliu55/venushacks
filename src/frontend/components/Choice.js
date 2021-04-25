import React, { useState, useEffect } from 'react';
import './Choice.css';

const Choice = ({ category, name, userSelection, setUserSelection}) => {
    const updateSelection = () => {
        setUserSelection((userSelection) => ({...userSelection, [category]: userSelection[category]=== name ? '' : name,}));
    };

    return (
        <div>
            <button className={userSelection[category] !== name ? "choice-btn" : "choice-btn-selected"}
            type="button" onClick={updateSelection}>
                {name}
            </button>
        </div>
    );
};

export default Choice;
