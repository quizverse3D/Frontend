import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './GamePage.module.scss';
import { CyberDivider } from '@/ui/CyberDivider/CyberDivider';

export const GamePage = () => {
    return (
        <div className={classNames(cls.GamePage)}>
            <div className={cls['CyberTitle']}>Game</div>
            <CyberDivider />
        </div>
    );
};
