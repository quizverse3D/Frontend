import React from 'react';
import { List } from '@/ui/List/List';
import cls from './Home.module.scss';
import { InfiniteParticlesBackground } from './components/Background/Background';
import {
    getRouteGame,
    getRouteAvatar,
    getRouteMultiplayer,
} from '@/shared/consts/routes';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
    const { t } = useTranslation('pages');
    const ListItems = [
        { name: t('home.single'), path: getRouteGame() },
        { name: t('home.multiplayer'), path: getRouteMultiplayer() },
        { name: t('home.avatar'), path: getRouteAvatar() },
    ];
    return (
        <div className={cls.HomePage}>
            {/* <InfiniteParticlesBackground /> */}
            <div className={cls.MenuWrapper}>
                <List items={ListItems}></List>
            </div>
        </div>
    );
};
