
import './App.css';
import Weather from "./Weather"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="New York" />

        <p className="link-source">
          <a
            href="https://github.com/KatarinaPli/weather-react"
            alt="GitHub link"
          >
            Open-source code
          </a>
          , by Kateryna Shyrokova from{" "}
          <a
            href="https://www.shecodes.io/graduates/68955-kateryna-shyrokova"
            alt="SheCodes link"
          >
            SheCodes
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
