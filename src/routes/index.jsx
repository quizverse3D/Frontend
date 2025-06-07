import { MainLayout } from '@/layouts/MainLayout';
import { Home } from '@/pages/Home';
import { Game } from '@/pages/Game';
export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '', element: <Home /> }, // Главная страница
            { path: 'game', element: <Game /> }, // Страница игры
        ],
    },
];
