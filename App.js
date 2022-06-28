import React from "react";
import Body from "./Body";
import Player from "./Player";
import About from "./About";
import Watch from "./Watch"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
  <Router>
  <Routes>
  	<Route exact path="/" element={<Body />} />
  	<Route exact path="/about" element={<About />} />
  	<Route exact path="/player" element={<Player />} />
    <Route exact path="/watch" element={<Watch />} />
    </Routes>
    </Router>
  );
}

export default App;
