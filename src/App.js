import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Copyright from './Copyright';
import Calcul from './Calcul';
import Multiplication from './Multiplication';
import Training from './Training';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/calcul" element={<Calcul />} />
        <Route path="/multiplication" element={<Multiplication />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </div>
  );
}

export default App;
