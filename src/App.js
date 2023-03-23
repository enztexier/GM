import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Copyright from './Copyright';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copyright" element={<Copyright />} />
      </Routes>
    </div>
  );
}

export default App;
