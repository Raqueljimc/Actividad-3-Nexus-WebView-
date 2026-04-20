import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Landing from './components/Landing';
import Libro from './components/Libro';
import LibroDetalle from './components/LibroDetalle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MisLibros from "./components/MisLibros";


function AppContent(){
 return (
  <div className='App'>
  
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/libros/:id" element={<LibroDetalle />}></Route>
      <Route path="/mis-libros" element={<MisLibros />} />
    </Routes>

  </div>
 ) 
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
