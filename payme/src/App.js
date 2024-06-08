import { Routes, Route } from "react-router-dom";
import Navigation from './nav/Navigation';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/exercises" element={<Exercise />} />
        <Route path="/foodItems" element={<Food />} />
        <Route path="/goals" element={<Goal />} /> */}
      </Routes>
    </div>
  );
}

export default App;
