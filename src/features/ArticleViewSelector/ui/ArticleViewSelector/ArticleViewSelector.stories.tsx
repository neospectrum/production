import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
