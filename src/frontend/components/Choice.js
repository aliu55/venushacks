import React from 'react';
import './Choice.css';
import { motion } from "framer-motion"

const Choice = ({ category, name, userSelection, setUserSelection}) => {
    const updateSelection = () => {
        setUserSelection((userSelection) => ({...userSelection, [category]: userSelection[category]=== name ? '' : name,}));
    };

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
          <button className={userSelection[category] !== name ? "choice-btn" : "choice-btn-selected"}
            type="button" onClick={updateSelection}>
                {name}
            </button>
        </motion.div>
    );
};

export default Choice;
