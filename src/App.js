import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://esther.design" target="_blank">
            Esther Nitafan
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/acuraintegurl/react-weather-app"
            target="_blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
