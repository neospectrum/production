import { memo, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
    ({ className, short }: LangSwitcherProps) => {
        const { t, i18n } = useTranslation();

        const toggle = async () => {
            i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        };

        return (
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames('', {}, [className])}
                onClick={toggle}
            >
                {t(short ? 'Короткий язык' : 'Язык')}
            </Button>
        );
    }
);
