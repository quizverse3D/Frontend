import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './MultiplayerPage.module.scss';
import { CyberDivider } from '@/ui/CyberDivider/CyberDivider';

export const MultiplayerPage = () => {
    return (
        <div className={classNames(cls.MultiplayerPage)}>
            <div className={cls['CyberTitle']}>Мультиплеер</div>
            <CyberDivider />
        </div>
    );
};
