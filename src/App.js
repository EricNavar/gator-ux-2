import AmongUsGif from './assets/among-us-dancing.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={AmongUsGif} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.innersloth.com/games/among-us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gator UX
        </a>
      </header>
    </div>
  );
}

export default App;
