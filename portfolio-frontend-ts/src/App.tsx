import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import NotFound from 'Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
