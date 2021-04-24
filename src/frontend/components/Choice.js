import React, { useState, useEffect } from 'react';

const Choice = ({ name }) => {
    // functions and variables and logic

    return (
        // for styling and for layout 
        <div>
            {/* create a button with the name */}
            <button className="choice-btn"
            type="button">
                {name}
            </button>
            {/* when the button is clicked, then call a function to do something (or to update the selection into a list) */}
        </div>
    );
};

export default Choice;