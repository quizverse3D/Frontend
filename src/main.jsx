import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './modules/core/App';
import './styles/main.scss';
import '@/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));
root.render(<App />); 