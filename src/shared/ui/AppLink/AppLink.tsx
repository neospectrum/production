import { memo, ReactNode, type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme;
    children?: ReactNode;

}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = 'primary',
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
