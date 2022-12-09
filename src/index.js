import React from 'react';
import ReacDom from 'react-dom/client';

import { NavigationProvider } from './context/navigation';

import App from './App';
import './index.css';

const root = ReacDom.createRoot(document.getElementById('root'));

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
