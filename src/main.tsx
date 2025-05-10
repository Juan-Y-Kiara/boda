import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HashRouter } from 'react-router-dom'; // Importa HashRouter

createRoot(document.getElementById("root")!).render(
  <HashRouter> {/* Envuelve tu App con HashRouter */}
    <App />
  </HashRouter>
);