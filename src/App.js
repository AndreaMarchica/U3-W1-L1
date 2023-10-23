import logo from "./logo.svg";
import "./App.css";
import Button from "../src/components/FunctionComponent";
import Image from "../src/components/ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button buttonName="Giuseppe" />
      <Image
        src={
          "https://citynews-torinotoday.stgy.ovh/~media/original-hi/42806607991723/milan-juventus-gol-esultanza-locatelli.jpg"
        }
        alt="esultanza gol locatelli"
      />
    </div>
  );
}

export default App;
