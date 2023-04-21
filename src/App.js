import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Copyright from './pages/copyright/Copyright';
import Calcul from './pages/calcul/Calcul';
import Multiplication from './pages/multiplication/Multiplication';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/calcul" element={<Calcul />} />
        <Route path="/multiplication" element={<Multiplication />} />
      </Routes>
    </div>
  );
}

export default App;
