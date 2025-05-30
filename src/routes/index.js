// Пример структуры роутов
import MainMenuPage from '@/pages/MainMenu';
import GameBoardPage from '@/pages/GameBoard';
import AvatarEditorPage from '@/pages/AvatarEditor';
import SettingsPage from '@/pages/Settings';

export const routes = [
  { path: '/', element: MainMenuPage },
  { path: '/game', element: GameBoardPage },
  { path: '/avatar', element: AvatarEditorPage },
  { path: '/settings', element: SettingsPage },
]; 