import { lazy } from 'react';

export const GamePageAsync = lazy(() => import('./GamePage').then(module => ({ default: module.GamePage }))); 