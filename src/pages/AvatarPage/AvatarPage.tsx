import { classNames } from '@/shared/utils/classNames/classNames';
import cls from './AvatarPage.module.scss';
import { CyberDivider } from '@/ui/CyberDivider/CyberDivider';

export const AvatarPage = () => {
    return (
        <div className={classNames(cls.AvatarPage)}>
            <div className={cls['CyberTitle']}>Редактор аватара</div>
            <CyberDivider />
        </div>
    );
};
