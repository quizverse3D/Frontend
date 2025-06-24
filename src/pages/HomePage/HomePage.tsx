import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MatrixRain } from './components/Background/Background';
import {
    getRouteGame,
    getRouteAvatar,
    getRouteMultiplayer,
} from '@/shared/consts/routes';
import { ListItemLink } from '@/ui/List/ListItemLink';
import { List } from '@/ui/List/List';
import cls from './Home.module.scss';
import { CyberDivider } from '@/ui/CyberDivider/CyberDivider';
import { ListItem } from '@/ui/List/ListItem';
import Button from '@/ui/Button';
import { Modal } from '@/ui/Modal/Modal';

// Выносим функции маршрутов в константы, чтобы они не вызывались при каждом рендере
const ROUTES = {
    game: getRouteGame(),
    multiplayer: getRouteMultiplayer(),
    avatar: getRouteAvatar(),
};

export const HomePage = () => {
    const { t } = useTranslation('pages');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className={cls.HomePage}>
            {/* <MatrixRain /> */}
            <div className={cls.MenuWrapper}>
                <h1 className={cls.Title}>Quizverse 3D</h1>
                <CyberDivider />
                <List className={cls.MenuList}>
                    <ListItemLink
                        to={ROUTES.game}
                        itemClassName={cls.MenuItem}
                        linkClassName={cls.MenuLink}
                        activeClassName={cls.ActiveLink}
                    >
                        {t('home.single')}
                    </ListItemLink>

                    <ListItemLink
                        to={ROUTES.multiplayer}
                        itemClassName={cls.MenuItem}
                        linkClassName={cls.MenuLink}
                        activeClassName={cls.ActiveLink}
                    >
                        {t('home.multiplayer')}
                    </ListItemLink>

                    <ListItemLink
                        to={ROUTES.avatar}
                        itemClassName={cls.MenuItem}
                        linkClassName={cls.MenuLink}
                        activeClassName={cls.ActiveLink}
                    >
                        {t('home.avatar')}
                    </ListItemLink>
                    <ListItem className={cls.MenuItem}>
                        <Button
                            className={cls.MenuBtn}
                            variant="menu"
                            onClick={handleOpenModal}
                        >
                            {t('home.settings')}
                        </Button>
                    </ListItem>
                </List>
            </div>
        </div>
    );
};
