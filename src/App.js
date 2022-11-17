import './App.css';
import moment from "moment";

function App() {
    let time = moment("20221030", "YYYYMMDD").fromNow()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bug was found {time}</h1>
        <h2>(since 30.10.2022)</h2>
      </header>
    </div>
  );
}

export default App;
