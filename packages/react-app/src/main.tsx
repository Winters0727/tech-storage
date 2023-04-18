import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const getRootElement = (idSelector: string) => {
  const selectedElement = document.querySelector(idSelector);

  if (selectedElement) return selectedElement;

  const rootElement = document.createElement('div');
  rootElement.setAttribute('id', idSelector.replace('#', ''));

  return rootElement;
};

createRoot(getRootElement('#app')).render(<App />);
