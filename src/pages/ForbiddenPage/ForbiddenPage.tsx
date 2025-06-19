import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './ForbiddenPage.module.scss';
import { CyberDivider } from '@/ui/CyberDivider/CyberDivider';

export const ForbiddenPage = () => {
    return (
        <div className={classNames(cls.ForbiddenPage)}>
            <div className={cls['CyberTitle']}>Доступ запрещён</div>
            <CyberDivider />
        </div>
    );
};
