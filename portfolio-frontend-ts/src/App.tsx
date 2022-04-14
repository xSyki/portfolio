import Socials from 'Components/Socials/Socials';
import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Socials />
    </div>
  );
}

export default App;
