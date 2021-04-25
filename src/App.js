import './App.css';
import Choice from './frontend/components/Choice';
import Youtube from './api/youtube';

function App() {
  return (
    <div className="App">
      Hello World
      <Choice name="Breakfast"/>
      <Choice name="Lunch" />
      <Choice name="Dinner" />
      <Youtube lengthChoice="5 minutes"/>
    </div>
  );
}

export default App;
