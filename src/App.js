import "./App.css";
import NexottoLoginScreen from "./components/mainScreen";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NexottoLoginScreen />
      </div>
    </Router>
  );
}

export default App;
