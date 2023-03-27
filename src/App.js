import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Copyright from './Copyright';
import Calcul from './Calcul';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/calcul" element={<Calcul />} />
      </Routes>
    </div>
  );
}

export default App;
