// Пример структуры роутов
import { Game } from '@/pages/Game';
import { Home } from '@/pages/Home';

export const routes = [
    { path: '/', element: Home },
    { path: '/game', element: Game },
];
