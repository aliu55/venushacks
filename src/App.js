import './App.css';
import Choice from './frontend/components/Choice';

function App() {
  return (
    <div className="App">
      Hello World
      <Choice name="Breakfast" />
      <Choice name="Lunch" />
      <Choice name="Dinner" />
    </div>
  );
}

export default App;
