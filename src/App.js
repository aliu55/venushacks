import './App.css';
import Choice from './frontend/components/Choice';
import youtube from './api/youtube';

function App() {

  function handleClick () {
    console.log(youtube("5 minutes"));
  }

  return (
    <div className="App">
      Hello World
      <Choice name="Breakfast" func = {handleClick}/>
      <Choice name="Lunch" />
      <Choice name="Dinner" />
    </div>
  );
}

export default App;
