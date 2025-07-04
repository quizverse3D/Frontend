import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './SettingsPage.module.scss';

export const SettingsPage = () => {
    return (
        <div className={classNames(cls.SettingsPage)}>
            <div className={cls['CyberTitle']}>Настройки</div>
            <div className={cls['CyberDivider']} />
        </div>
    );
};
