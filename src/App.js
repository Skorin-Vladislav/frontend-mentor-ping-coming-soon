import "./App.css";
import logo from "./img/logo.svg";
import charts from "./img/illustration-dashboard.png";
import Input from "./components/input-area/Input";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <img className="logo" src={logo} alt="logo"></img>
          <h1>
            We are launching <b>soon!</b>
          </h1>
          <p>Subscribe and get notified</p>
        </div>
        <Input />
        <div className="charts">
          <img className="dashboard" src={charts} alt="dashboard"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
