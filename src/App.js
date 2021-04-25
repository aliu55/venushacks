  
import './App.css';
import Choice from './frontend/components/Choice';
import Edamam from './api/Edamam'

function App() {

  return (
    <div className="App">
      Hello World
      <Choice name="Breakfast" />
      <Choice name="Lunch" />
      <Choice name="Dinner" />
      <Edamam meal="Lunch"/>
    </div>
  );
}

export default App;
