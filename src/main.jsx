import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/modules/core/App';

import '@/config/i18n/i18n';

import './styles/main.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
