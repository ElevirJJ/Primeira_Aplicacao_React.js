import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'


import './global.css'

import App from './components/App.jsx'
import Aluguel from './pages/Aluguel.jsx'
import Contato from './pages/Contato.jsx'
import Tripulacao from './pages/Tripulacao.jsx'
import Destinos from './pages/Destinos.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>

      <Route path="/" element={<App />} />
      <Route path="/Aluguel" element={<Aluguel />} />
      <Route path="/Destinos" element={<Destinos />} />
      <Route path="/Tripulacao" element={<Tripulacao />} />
      <Route path="/Contato" element={<Contato />} />

     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
