import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ThemeSwitcher } from './ThemeSwitcher';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Light = Template.bind({});
Light.args = {};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
