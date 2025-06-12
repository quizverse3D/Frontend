import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/modules/core/app';

import '@/config/i18n/i18n';

import './styles/main.scss';
const container = document.getElementById('root');
if (!container) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение'
    );
}
const root = createRoot(container);
root.render(<App />);
