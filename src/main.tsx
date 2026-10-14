import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Register Service Worker for Mobile Web Push Notifications and offline capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('Service Worker registrat amb èxit:', registration.scope);
      })
      .catch((error) => {
        console.warn('Error registrant el Service Worker:', error);
      });
  });
}

createRoot(document.getElementById('root')!).render(<App />);
