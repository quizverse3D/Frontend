import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { CyberDivider } from '@/ui/CyberDivider/CyberDivider';

export const NotFoundPage = () => {
    return (
        <div className={classNames(cls.NotFoundPage)}>
            <div className={cls['CyberTitle']}>404 Not Found</div>
            <CyberDivider />
        </div>
    );
};
