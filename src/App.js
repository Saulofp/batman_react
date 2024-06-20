import React from 'react';
import Home from './pages/home/indexHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './pages/contato/indexContato';
import Fotos from './pages/fotos/indexFotos';
import Comentarios from './pages/comentarios/indexComentarios';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/fotos' element={<Fotos/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
    </BrowserRouter>
  );

};

export default App;