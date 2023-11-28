import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import "./styles/Header.css";
import "./styles/Main.css";
import "./styles/App.css";
import App from './components/App';
import Logement from "./components/Logement"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/testB" element={<Logement />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
</React.StrictMode>
)