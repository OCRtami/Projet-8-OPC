import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/index.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from './pages/home/Home';
import Error from "./pages/error/Error";
import Apartment from './pages/apartment/Apartment.js';
import About from "./pages/about/About"

//Selectionne l'id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

//Lui ajoute tout les composants ci dessous
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/"             element={<Homepage />} />
          <Route path="/Logement/:id" element={<Apartment />} />
          <Route path="/About"        element={<About />} />
          <Route path="*"             element={<Error />} />
      </Routes>
      <Footer />
    </Router>
</React.StrictMode>
)