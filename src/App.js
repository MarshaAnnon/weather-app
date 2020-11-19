import React from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Marsha's React Weather App
        </h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Created by Marsha Annon, aka MarshaCodes
      </footer>
    </div>
  );
}

export default App;
