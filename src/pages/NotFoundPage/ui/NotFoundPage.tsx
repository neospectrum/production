import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(
    ({ className }: NotFoundPageProps) => {
        const { t } = useTranslation();

        return (
            <Page
                data-testid='NotFoundPage'
                className={classNames(cls.NotFoundPage, {}, [className])}
            >
                {t('Страница не найдена')}
            </Page>
        );
    }
);
