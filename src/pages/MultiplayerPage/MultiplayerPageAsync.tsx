import { lazy } from 'react';

export const MultiplayerPageAsync = lazy(() => import('./MultiplayerPage').then(module => ({ default: module.MultiplayerPage }))); 