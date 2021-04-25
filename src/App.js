  
import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SelectionPage from './frontend/views/selectionPage/SelectionPage';
import ResultPage from './frontend/views/resultPage/ResultPage';

function App() {
  const [userSelection, setUserSelection] = useState({
    'health': '',
    'fitness': '',
    'selfcare': ''
  });

  const [results, setResults] = useState({
    "health": [],
    "fitness": [],
    "selfcare": []
  });
    
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
              <SelectionPage userSelection={userSelection} setUserSelection={setUserSelection} results={results} setResults={setResults} />
          </Route>
          <Route exact path="/results">
              <ResultPage results={results} setResults={setResults} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
