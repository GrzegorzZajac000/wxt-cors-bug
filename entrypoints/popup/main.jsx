import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './Popup.jsx';
import { HashRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Popup />
  </HashRouter>
);
