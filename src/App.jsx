import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inicio from './pages/Inicio/Inicio';
import ProjetosExperiencia from './pages/ProjetosExperiencia/ProjetosExperiencia';
import Servicos from './pages/Servicos/Servicos';
import Sobre from './pages/Sobre/Sobre'; // 1. Importe a nova página

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} /> {/* 2. Adicione a nova rota */}
          <Route path="/projetos-e-experiencias" element={<ProjetosExperiencia />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;