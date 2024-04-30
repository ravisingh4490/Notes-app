import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    }).catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


// to make sw work perfectly for gh pages use 
// navigator.serviceWorker.register("/repo-name/service-worker.js").then((registration)
// Example : navigator.serviceWorker.register("/notes-app/service-worker.js").then((registration)
// in gh-pages yr repo must be root dir
// and for deploying on vercel or somewhere else use 
// navigator.serviceWorker.register("/service-worker.js").then((registration)
// root dir normal
