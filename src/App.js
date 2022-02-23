import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="https://esther.design">Esther Nitafan</a> and is{" "}
          <a href="https://github.com/acuraintegurl/react-weather-app">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
