import "./App.css";
import logo from "./img/logo.svg";
import Input from "./components/input-area/Input";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={logo} alt="logo"></img>
        <h1>
          We are launching <b>soon!</b>
        </h1>
        <p>Subscribe and get notified</p>
      </div>
        <Input />
    </div>
  );
}

export default App;
