import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Randomizer from './screens/Randomizer';
import Scoreboard from './screens/Scoreboard';
import About from './screens/About';
import AuthInputs from './components/AuthInputs';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<AuthInputs />} />
          <Route path="/randomizer" element={<Randomizer />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<AuthInputs />} />
          <Route path="/signup" element={<AuthInputs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
