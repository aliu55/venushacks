import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import SelectionPage from './frontend/views/selectionPage/SelectionPage';
import ResultPage from './frontend/views/resultPage/ResultPage';

function App() {
  const [userSelection, setUserSelection] = useState({
    'health': '',
    'fitness': '',
    'selfcare': ''
  });
    
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
            <SelectionPage userSelection={userSelection} setUserSelection={setUserSelection} />
        </Route>
        {/* <Route path="/test">
            <Test />
        </Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
