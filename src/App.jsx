import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fooder from './components/Fooder';
import Header from './components/Header';
import Home from './pages/home';
import Procedimiento from './pages/Pocedimientos';
import Aspirante from './pages/Aspirantes';
import Testimonio from './pages/Testimonio';
import Bolsa from './pages/Bolsa';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aspirante" element={<Aspirante />} />
          <Route path="/procedimiento" element={<Procedimiento />} />
          <Route path="/testimonio" element={<Testimonio />} />
          <Route path="/bolsa" element={<Bolsa />} />
        </Routes>
      </div>
      <Fooder/>
    </Router>
   </>
  )
}

export default App;
