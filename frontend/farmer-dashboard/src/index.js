import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Page from './Component/Page';
// import Registration from './Component/Registration';
 import App from './App';
 import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);