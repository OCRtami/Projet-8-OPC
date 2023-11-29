import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Logement from "./components/Logement"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/testB" element={<Logement />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
</React.StrictMode>
)