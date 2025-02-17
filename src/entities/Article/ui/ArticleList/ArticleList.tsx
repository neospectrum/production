import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView } from '../../model/constants/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 15 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                key={index}
                view={view}
                className={cls.card}
            />
        ));

export const ArticleList: FC<ArticleListProps> = memo(
    (props: ArticleListProps) => {
        const {
            className,
            articles,
            view = ArticleView.SMALL,
            isLoading,
            target,
        } = props;
        const { t } = useTranslation();

        const renderArticle = (article: Article) => (
            <ArticleListItem
                article={article}
                view={view}
                className={cls.card}
                key={article.id}
                target={target}
            />
        );

        if (!isLoading && !articles.length) {
            return (
                <div
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                    data-testid='ArticleList'
                >
                    <Text size={TextSize.L} title={t('Статьи не найдены')} />
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
                data-testid='ArticleList'
            >
                {articles.length > 0 ? articles.map(renderArticle) : null}
                {isLoading && getSkeletons(view)}
            </div>
        );
    }
);
