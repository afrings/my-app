import logo from './imgs/Abby_&_Austin_UW_Madison_30.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Austin Frings
        </p>
        <a id='l' href="https://github.com/afrings">My Github</a>
      </header>
    </div>
  );
}

export default App;
