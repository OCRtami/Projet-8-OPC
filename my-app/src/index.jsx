import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from './pages/Home';
import Error from "./pages/Error";
import Apartment from './pages/Apartment';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Logement/:id" element={<Apartment />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
</React.StrictMode>
)