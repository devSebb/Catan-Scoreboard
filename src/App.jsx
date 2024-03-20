import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Randomizer from './screens/Randomizer';
import Scoreboard from './screens/Scoreboard';
import About from './screens/About';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/randomizer" element={<Randomizer />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
