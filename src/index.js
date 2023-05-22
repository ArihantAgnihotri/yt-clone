import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.js';
import './index.css'
import { AppProvider } from './components/context/context.js';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <AppProvider><App /></AppProvider>
    
);